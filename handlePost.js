const pg = require('pg')
const { Client } = pg
const db = require('./db')

// old way with pg. "have to" use new way with sequelize now that I've commited to that I think? Or why didn't this work?
const handlePost = async (req, res) => {
    const { name, email, message } = req.body
    const params = [name, email, message]
    const query = "INSERT INTO messages(name, email, msg) values($1, $2, $3)"
    const result = await db.query(query, params)
    if (result.rows == []) console.log("insert successful")
    res.json({insertMessage: "success"})


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