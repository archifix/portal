require('dotenv').config('./.env')
const express = require('express')
const sequelize = require('./db.js')
const modele = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const roruter = require('./routes/index')
const errorHandler = require('./midldleware/ErrorHandlingMidleware')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
    try {
    await sequelize.authenticate();
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server OK on: ${PORT}`))
  } catch(e) {
    console.log(e)
  }
}

start()