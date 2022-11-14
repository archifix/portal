const Router = require('express')
const router = new Router()
// const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')
const typeRouter = require('./typRouter')
const descriptionRouter = require('./descriptionRouter')

router.use('/user', userRouter)
router.use('/news', newsRouter)
router.use('/type', typeRouter)
router.use('/description', descriptionRouter)

module.exports = router