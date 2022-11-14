const {Description} = require('../models/models')
const ApiError = require('../error/ApiError')

class DescriptionController {
  async create(req, res) {
    const {name} = req.body
    const type = await Description.create({name})
    return res.json(type)
  }
  async getAll(req, res) {
    const types = await Description.findAll()
    return res.json(types)
  }
  
}

module.exports = new DescriptionController()