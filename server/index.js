require('dotenv').config('./.env')
const express = require('express')
const sequelize = require('./db.js')
const modele = require('./models/models')

const PORT = process.env.PORT
console.log(PORT)

const app = express()

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