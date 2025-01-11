require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const html = require('./html.js')
const { handlePost } = require('./handlePost.js')
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({ origin: 'https://jarenwhitehouse.netlify.app' }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/", (req, res) => res.type('html').send(html));
app.post("/dave", handlePost);


app.post("/api", (req, res) => {
  console.log(req.body?.made)
  res.json({ 
    message: `Hello from Render! This was made by ${req.body?.made}`,
    method: "post"
   })
});

app.post('/cred', (req,res) => {
  console.log(process.env.PGHOST)
  console.log(process.env.PGUSER)

})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
