const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const { dropAllSchemas } = require('../db')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  // fullName: {type: DataTypes.STRING, require: false, allowNull: false},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
<<<<<<< HEAD
  // isActivation: {type: DataTypes.BOOLEAN, defaultValue: false},
  // activationLink: {type: DataTypes.STRING},
=======
>>>>>>> 0e5a80557de103005bea356e3a8e77cb9fbea83f
  // official: {type: DataTypes.INTEGER, require: false, unique: true},
  // mobile: {type: DataTypes.INTEGER, require: false, unique: true},
  // city: {type: DataTypes.STRING, require: false, unique: true, allowNull: false},
  // street: {type: DataTypes.STRING, require: false, allowNull: false},
  // home: {type: DataTypes.INTEGER, require: false, allowNull: false},
  // flat: {type: DataTypes.INTEGER, require: false, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: "USER"}  
})

// const Token = sequelize.define('tokens', {
//   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//   user: {type: Object.User, ref: 'User'},
//   refreshToken: {tye: DataTypes.STRING, require: true},
// })

const News = sequelize.define('news', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
  title: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
})

const Content = sequelize.define('content', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  info: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
})


User.hasMany(News)
News.belongsTo(User)

Content.hasMany(News)
News.belongsTo(Content)

// Token.hasOne(User)
// User.belongsTo(Token)

module.exports = {
  User, News, Content
}