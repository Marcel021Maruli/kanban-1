const router = require('express').Router()
const controllerCategory = require('../controllers/category')

router.post('/', controllerCategory.add)
router.put('/:id', controllerCategory.edit)
router.get('/', controllerCategory.read)
router.delete('/:id', controllerCategory.destroy)

module.exports = router