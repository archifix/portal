const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  fullName: {type: DataTypes.STRING, require: true, allowNull: false},
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

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
  content: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
})


Users.hasMany(News)
News.belongsTo(Users)

News.hasOne(Type)
Type.belongsTo(News)

Type.hasOne(News)
News.belongsTo(Type)

module.exports = {
  Users, News, Type
}