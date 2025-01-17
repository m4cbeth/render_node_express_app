require('dotenv').config();
const express = require("express");
const app = express();
const html = require('./html.js')
const cors = require('cors');
const port = process.env.PORT || 3001;
// -----------------------------------
const { handlePost, getJarens } = require('./handlePost.js')
// const { poststring } = require('./postgresstring.js')
const db = require('./models')
db.sequelize.sync({ alter: true })
.then((x)=>console.log(x))
.catch((e)=>console.error(e))
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(`postgres://mysitedb_sgc8_user:${process.env.PGPASSWORD}@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8`);

app.use(express.json());
app.use(cors())
app.use(cors({ origin: 'https://jarenwhitehouse.netlify.app' }));
app.use(cors({ origin: 'http://localhost:3000' }));

const {Message, sequelize} = require('./models/message.js')

// sequelize.sync({ alter: true }).then(
//   console.log('Database synced!')    
// ).catch((e)=>console.error(e))
// Message.create({
//       message: 'hey there',
//       name: 'gary',
//     }).then((data)=> {
//       console.log('Message created:', data.toJSON())
//     }).catch((e) => console.error(e))



app.get('/', (req, res) => res.type('html').send(html))
app.get("/api", getJarens)
app.post("/messages", handlePost)



const server = app.listen(port, () => console.log(`Here we go baby, up and running on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
