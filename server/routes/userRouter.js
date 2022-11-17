const Router = require('express')
const userControllers = require('../controllers/userControllers')
const router = new Router()
const userController = require('../controllers/userControllers')
const authMiddleware = require('../midldleware/authMiddleware')


router.post('/registration', userControllers.registration)
router.post('/login', userControllers. login)
router.get('/auth', authMiddleware, userControllers.check)

module.exports = router