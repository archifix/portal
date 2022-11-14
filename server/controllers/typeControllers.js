const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
  async create(req, res) {
    const {title, content} = req.body
    const type = await Type.create({title, content})
    return res.json(type)
  }
  async getAll(req, res) {
    const type = await Type.findAll()
    return res.json(type)
  }
  
}

module.exports = new TypeController()