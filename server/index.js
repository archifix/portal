require('dotenv').config('./.env')
const express = require('express')
const sequelize = require('./db.js')
const modele = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT
console.log(PORT)

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
    await sequelize.authenticate();
    await sequelize.sync()
    app.listen(PORT, () => console.log('Server OK'))
  } catch(e) {
    console.log(e)
  }
}

start()