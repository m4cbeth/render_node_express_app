const pg = require('pg')
const { Client } = pg

const handlePost = async (req, res) => {
    const client = new Client({
        host: "dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com",
        ssl: true,
      });
    await client.connect()
    const jaren = await client.query('SELECT * FROM jarens')
    await client.end()
    console.log(req.body)
    console.table(jaren.rows)
    return res.json({ 
        message: "test worked",
        jarens: jaren.rows,
    })
}

module.exports = { handlePost }