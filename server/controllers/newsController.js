const uuid = require('uuid')
const path = require('path')
const {News} = require('../models/models')
const ApiError = require('../error/ApiError')
const { json, where } = require('sequelize')

class NewsController {
  async create(req, res, next) {
    try {
      const {name, typeId} = req.body
    const {img} = req.files
    let fileName = uuid.v4() + ".jpg"
    img.mv(path.resolve(__dirname, '..', 'static', fileName))

    const news = await News.create({name, typeId, img: fileName})

    return res.json(news)
    }
    catch (e) {
      next(ApiError.badRequest(e.massage))
    }
    
  }
  async getAll(req, res) {
    const {typeId} = req.query
    let news;
    if(!typeId) {
      news = await News.findAll()
    }
    if(typeId) {
      news = await News.findAll(where[typeId])
    }
    return res.json(news)
  }
  async getOne(req, res) {
    const {id} = req.params
        const news = await News.findOne(
            {
                where: {id},
            },
        )
        return res.json(news)
    
  }
}

module.exports = new NewsController()