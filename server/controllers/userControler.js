const userService = require("../service/user-service")

class UserControllers {
  async registration(req, res,next) {
    try {
      const {email, password} = req.body
      const userData = await userService.registration(email, password)
      return res.json(userData)
    } catch (e) {
      console.log(e)
    }
  }
  async login(req, res,next) {
    try {

    } catch (e) {
      
    }
  }
  async logout(req, res,next) {
    try {

    } catch (e) {
      
    }
  }
  async activate(req, res,next) {
    try {

    } catch (e) {
      
    }
  }
  async refresh(req, res,next) {
    try {

    } catch (e) {
      
    }
  }
  async getUser(req, res,next) {
    try {
      res.json(['123', '324'])
    } catch (e) {
      
    }
  }
}

module.exports = new UserControllers()