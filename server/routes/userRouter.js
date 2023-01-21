const Router = require('express')
const userControllers = require('../controllers/userControler')
const router = new Router()
<<<<<<< HEAD

router.post('/registration', userControllers.registration)
router.post('/login', userControllers. login)
router.post('/logout', userControllers. logout)
router.get('/activate/:link', userControllers.activate)
router.get('/refresh', userControllers.refresh)
router.get('/users', userControllers.getUser)
=======
const userController = require('../controllers/userControllers')
const authMiddleware = require('../midldleware/authMiddleware')


router.post('/registration', userControllers.registration)
router.post('/login', userControllers. login)
router.get('/auth', authMiddleware, userControllers.check)
>>>>>>> 0e5a80557de103005bea356e3a8e77cb9fbea83f

module.exports = router