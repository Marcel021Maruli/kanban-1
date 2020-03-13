const router = require('express').Router()
const controllerUser = require('../controllers/user')

router.post('/login', controllerUser.login)
router.post('/register', controllerUser.register)
router.get('/', controllerUser.read)
router.post('/googleLogin', controllerUser.googleLogin)

module.exports = router