require('dotenv').config();
const express = require("express");
const app = express();
const html = require('./html.js')
const cors = require('cors');
const rateLimit = require("express-rate-limit");
const port = process.env.PORT || 3001;
// -----------------------------------
const { handlePost, getJarens } = require('./handlePost.js')

// UNCOMMENT AND RUN LOCALLY TO SYNC AFTER ADDING MODELS
// const db = require('./models')
// db.sequelize.sync({ alter: true }).then((x)=>console.log(x)).catch((e)=>console.error(e))



app.use(express.json());
// app.use(cors({ origin: 'https://jarenwhitehouse.netlify.app' }))
// app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

const { User } = require('./models')
const { Message } = require('./models')
app.post('/messages', (req, res) => {
    const {message, email, name } = req.body
    Message.create({message, name, email})
    .then((x)=> console.log(x.dataValues))
    .then(console.log("added"))
    .catch((e)=>console.error(e))
    res.json({})
})

app.get('/', (req, res) => res.type('html').send(html))
app.get('/api', getJarens)
app.get('/getalluser', async (req,res)=>{
  const users = await User.findAll()
  res.json({
    allUsers: users
  })
})





app.post('/signin', async (req, res) => {
  const { email, name, account: access_token} = req.body
  let foundUser
  try {
    const user = await User.findAll({
      where: {
        email: email
      }
    })
    foundUser = user
    if (!user[0]) {
      try {
        const newUser = await User.create({
          name: name,
          email: email,
        })
        console.log(`added ${newUser} to db`)
      } catch(err) {
        console.error(`Couldn't insert into db silly goose: ${err}`)
      }
    } else {
      // there is a user!
      // send back what is in db for them to store as a seperate piece of user state
      // you'll have your auth provider and a context provider for user
      console.log(foundUser[0].dataValues)
      // 2 things... realizing this block is useless, can't res.json here, have to in finally block
      // and also for some reason have to foundUser[0].dataValues here to get the plain object,
      // whereas in the res.json giving foundUser[0] comes out the other size as the plain object... weird.
    }

  }
  catch(err) {
    console.error('jayron erron, think this means db connect issue?')
    console.error(err)
  }
  finally {
    res.json({
      message: "from the db, we got",
      user: foundUser[0] ||  "no user, something wrong"
    })
  }
})










const server = app.listen(port, () => console.log(`Here we go baby, up and running on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
