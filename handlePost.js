const pg = require('pg')
const { Client } = pg

const handlePost = async (req, res) => {
    const client = new Client({
        host: "dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com",
        ssl: true,
      });
    await client.connect()
    const jaren = await client.query('SELECT * FROM jarens')
    const result = await client.query('SELECT NOW()')
    await client.end()
    console.log(req.body)
    return res.json({ 
        message: "test worked",
        result: new Date(result["rows"][0]["now"]).toString().slice(0,15),
        jaren: jaren["rows"][0],
    })
}

module.exports = { handlePost }