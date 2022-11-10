const Router = require('express')
const userControllers = require('../controllers/userControllers')
const router = new Router()
const UserController = require('../controllers/userControllers')

router.post('/registration', userControllers.registration)
router.post('/login', userControllers. login)
router.get('/auth', userControllers.check)

module.exports = router