const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  fullName: {type: DataTypes.STRING, require: true, allowNull: false},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  official: {type: DataTypes.INTEGER, require: true, unique: true},
  mobile: {type: DataTypes.INTEGER, require: true, unique: true},
  city: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
  street: {type: DataTypes.STRING, require: true, allowNull: false},
  home: {type: DataTypes.INTEGER, require: true, allowNull: false},
  flat: {type: DataTypes.INTEGER, require: true, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
  update_login: {type: DataTypes.INTEGER, require: true}
})

const News = sequelize.define('news', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
  viewcount: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, require: true, unique: true, allowNull: false}
})

const Description = sequelize.define('description', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
})

const TypeDescription = sequelize.define('type_description', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(News)
News.belongsTo(User)

Type.hasMany(News)
News.belongsTo(Type)

Description.hasMany(News)
News.belongsTo(Description)

Type.belongsToMany(Description, {through: TypeDescription })
Description.belongsToMany(Type, {through: TypeDescription })

module.exports = {
  User, News, Type, Description, TypeDescription
}