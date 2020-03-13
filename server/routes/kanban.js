const router = require('express').Router()
const controllerKanban = require('../controllers/kanban')
const authorization = require('../middlewares/authorization')

router.post('/', controllerKanban.add)
router.patch('/:id', authorization, controllerKanban.edit)
router.get('/', controllerKanban.read)
router.delete('/:id', authorization, controllerKanban.destroy)

module.exports = router