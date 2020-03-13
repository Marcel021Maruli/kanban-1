const { Category, User, Kanban } = require('../models')

class CategoryController {
  static add(req, res, next) {
    const { title } = req.body
    Category
      .create({
        title
      })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static read(req, res, next) {

    Category
      .findAll({
        include: [{
          model: Kanban,
          required: false,
          where: { UserId: req.user.id },
        }]
      })
      .then(data => {
        // console.log(req.user.id);
        // data.forEach(element => {

        // });
        // data.Kanbans.filter(el => UserId == req.user.id)
        res.status(200).json(data)
      })
      .catch(err => {
        res.send(err)
        // next(err)
      })
  }

  static edit(req, res, next) {
    const id = req.params.id
    const { title, CategoryId } = req.body
    Category
      .update({
        title,
        CategoryId
      }, {
        where: {
          id: id
        }, returning: true
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static destroy(req, res, next) {
    const id = req.params.id
    Category
      .destroy({
        where: {
          id
        }, returning: true
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = CategoryController