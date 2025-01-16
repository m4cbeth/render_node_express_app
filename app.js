require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const html = require('./html.js')
const { handlePost, getJarens } = require('./handlePost.js')
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
app.use(cors({ origin: 'https://jarenwhitehouse.netlify.app' }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/", (req, res) => res.type('html').send(html));
app.post("/dave", handlePost);


app.get("/api", getJarens);
app.post("/api", (req, res) => {
  console.log(req.body?.made)
  res.json({ 
    message: `Hello from Render! This was made by ${req.body?.name}`,
    method: "post"
   })
});

app.get("/users", )

const server = app.listen(port, () => console.log(`Here we go baby, up and running on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
