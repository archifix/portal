const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  fullName: {type: DataTypes.STRING, require: false, allowNull: false},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  official: {type: DataTypes.INTEGER, require: false, unique: true},
  mobile: {type: DataTypes.INTEGER, require: false, unique: true},
  city: {type: DataTypes.STRING, require: false, unique: true, allowNull: false},
  street: {type: DataTypes.STRING, require: false, allowNull: false},
  home: {type: DataTypes.INTEGER, require: false, allowNull: false},
  flat: {type: DataTypes.INTEGER, require: false, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: "USER"}  
})

const News = sequelize.define('news', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
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

module.exports = {
  User, News, Content
}