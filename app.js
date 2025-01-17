require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const html = require('./html.js')
const { handlePost, getJarens } = require('./handlePost.js')
const port = process.env.PORT || 3001;
const db = require("./db")


const Sequelize = require('sequelize');
const sequelize = new Sequelize(`postgres://mysitedb_sgc8_user:${process.env.PGPASSWORD}@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8`);



app.use(express.json());
app.use(cors())
app.use(cors({ origin: 'https://jarenwhitehouse.netlify.app' }));
app.use(cors({ origin: 'http://localhost:3000' }));

const basicbitch = (req, res) => res.type('html').send(html)

app.get("/", basicbitch);
app.post("/dave", basicbitch);
app.get("/api", getJarens);
app.post('/api', (req, res) => {
  res.json({
    body: req.body.message
  })
})

app.get("/users", basicbitch)
app.post("/messages", handlePost)



sequelize.authenticate()
.then(()=> console.log('Connection has been established successfully.'))
.catch((err) => console.error(err))


const server = app.listen(port, () => console.log(`Here we go baby, up and running on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
