const Router = require('express')
const router = new Router()
const descriptionController = require('../controllers/descriptionControllers')

router.post('/', descriptionController.create)
router.get('/', descriptionController.getAll)

module.exports = router