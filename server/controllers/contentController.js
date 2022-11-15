const {Content} = require('../models/models')
const ApiError = require('../error/ApiError')

class ContentController {
  async create(req, res) {
    const {info} = req.body
    const content = await Content.create({info})
    return res.json(content)
    
  }
  async getAll(req, res) {
    const contents = await Content.findAll()
    return res.json(contents)
  }
  async getOne(req, res) {
    const {id} = req.params
    const content = await Content.findOne(
      {
        where: {id}
      })
    return res.json(content)
  }
 
}

module.exports = new ContentController()