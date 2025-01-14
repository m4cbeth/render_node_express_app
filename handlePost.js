const pg = require('pg')
const { Client } = pg

const handlePost = async (req, res) => {
    const client = new Client({
        host: "dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com",
        ssl: true,
    });

    await client.connect()
   

    try {
        console.log(req.body.data[0].name)
        const result = await client.query("INSERT INTO jarens(name, age) values($1, $2)", [req.body.data[0].name, req.body.data[0].age])
        
        console.log(result)
    } catch (err) {
        console.error(err)
    } finally {
        await client.end()
        
    }
    
    return res.json({ 
        message: "test worked",
      
    
    })
}
const getJarens = async (req, res) => {
    const client = new Client({
        host: "dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com",
        ssl: true,
    });

    await client.connect()

    const jays = await client.query("SELECT * FROM jarens")

    await client.end()

    console.log(jays.rows)
    return res.json({
        "jays": jays.rows,
    })
}

module.exports = { handlePost, getJarens }