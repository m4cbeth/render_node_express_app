const pg = require('pg')
const { Client } = pg

const handlePost = async (req, res) => {
    const client = new Client({
        host: "dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com",
        ssl: true,
    });

    await client.connect()
   
    let blwam = 0
    try {
        console.log(req.body)
        // const result = await client.query("INSERT INTO jarens(name, age) values($1, $2)", [req.body.data[0].name, req.body.data[0].age])
        const result = await client.query("select * from jarens")
        blwam = result.rows
        console.table(blwam)
    } catch (err) {
        console.error(err)
    } finally {
        await client.end()
        
    }
    
    return res.json({ 
        message: "test worked",
        result: blwam
      
    
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