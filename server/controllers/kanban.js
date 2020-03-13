const { Kanban, User, Category } = require('../models')

class KanbanController {
  static add(req, res, next) {
    const { name, CategoryId } = req.body
    Kanban
      .create({
        name,
        UserId: req.user.id,
        CategoryId
      }, { include: [Category] })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
  static read(req, res, next) {
    Kanban
      .findAll({
        where: {
          UserId: req.user.id
        },
        include: [Category]
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

  static edit(req, res, next) {
    let id = req.params.id
    let { name, CategoryId } = req.body
    if (CategoryId == null) {
      CategoryId = 1
    }
    Kanban
      .update({
        name,
        CategoryId,
        UserId: req.user.id
      }, {
        where: {
          id: id
        }, include: [User, Category],
        returning: true
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
    Kanban
      .destroy({
        where: {
          id
        }, include: [User, Category],
        returning: true
      })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = KanbanController