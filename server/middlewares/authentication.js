const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
  try {
    const token = req.headers.token
    const user = jwt.verify(token, process.env.SECRET)
    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authentication