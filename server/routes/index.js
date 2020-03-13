const router = require('express').Router()
const userRoutes = require('./user')
const kanbanRoutes = require('./kanban')
const categoryRoutes = require('./category')
const showError = require("../middlewares/errorHandling")
const authentication = require('../middlewares/authentication')

router.use('/users', userRoutes)
router.use(authentication)
router.use('/kanbans', kanbanRoutes)
router.use('/categories', categoryRoutes)

router.use(showError)


module.exports = router