const uuid = require('uuid')
const path = require('path')
const {News} = require('../models/models')
const ApiError = require('../error/ApiError')

class NewsController {
  async create(req, res, next) {
    try {
      const {name, contentId} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

    const news = await News.create({name, contentId, img: fileName})

    return res.json(news)
    }
    catch (e) {
      next(ApiError.badRequest(e.massage))
    }
    
  }
  async getAll(req, res) {
    const {newsId} = req.query
    let news;
    if(!newsId) {
      news = await News.findAll()
    }
    if(newsId) {
      news = await News.findAll({where:{newsId}})
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