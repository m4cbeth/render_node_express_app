require('dotenv').config();
const express = require("express");
const app = express();
const html = require('./html.js')
const cors = require('cors');
const port = process.env.PORT || 3001;
// -----------------------------------
const { handlePost, getJarens } = require('./handlePost.js')

// UNCOMMENT AND RUN LOCALLY TO SYNC AFTER ADDING MODELS
// const db = require('./models')
// db.sequelize.sync({ alter: true }).then((x)=>console.log(x)).catch((e)=>console.error(e))


app.use(express.json());
app.use(cors())
app.use(cors({ origin: 'https://jarenwhitehouse.netlify.app' }));
app.use(cors({ origin: 'http://localhost:3000' }));

const { Message } = require('./models')
app.post('/test', (req, res) => {
    const {message, email, name } = req.body
    Message.create({message, name, email})
    .then((x)=> console.log(x.dataValues))
    .then(console.log("added"))
    .catch((e)=>console.error(e))
    res.json({})
})

app.get('/', (req, res) => res.type('html').send(html))
app.get("/api", getJarens)
app.post("/messages", handlePost)



const server = app.listen(port, () => console.log(`Here we go baby, up and running on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
