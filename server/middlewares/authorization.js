const { Kanban } = require('../models')

function authorization(req, res, next) {
  Kanban
    .findOne({
      where: {
        id: req.params.id,
      }
    })
    .then(result => {
      if (!result) {
        throw {
          error: 404,
          msg: 'No data found.'
        }
      }
      if (result && result.UserId === req.user.id) {
        next()
      } else {
        throw {
          error: 403,
          msg: "Unauthorized"
        }
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authorization