const bcrypt = require('../helpers/bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


class UserController {
  static googleLogin(req, res, next) {
    const { id_token } = req.body
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      User
        .findOne({
          where: {
            email: payload.email
          }
        })
        .then(data => {
          if (data) {
            const token = jwt.sign({
              id: data.id,
              username: data.id,
              email: data.email
            }, process.env.SECRET)
            res.status(200).json(token)
          } else {
            User
              .create({
                username: payload.name.split(" ").join(""),
                email: payload.email,
                password: "12345",
              })
              .then(result => {
                const token = jwt.sign({
                  id: result.id,
                  username: result.username,
                  email: result.email
                }, process.env.secret)
                res.status(200).json(token)
              })
              .catch(err => {
                next(err)
              })
          }
        })
    }
    verify().catch(console.error);

  }

  static login(req, res, next) {
    const { username, email, password } = req.body
    if (email) {
      User
        .findOne({
          where: {
            email: email
          }
        })
        .then(data => {
          if (!data) {
            throw {
              error: 400,
              msg: 'You are not registered yet.'
            }
          }
          const compare = bcrypt.compare(password, data.password)
          if (data && compare) {
            const token = jwt.sign({
              id: data.id,
              username: data.username,
              email: data.email
            }, process.env.SECRET)
            res.status(200).json(token)
          }
          else {
            throw {
              error: 400,
              msg: 'Wrong email/password.'
            }
          }
        })
        .catch(err => {
          next(err)
        })
    } else {
      throw {
        error: 400,
        msg: 'Email cannot empty.'
      }
    }
  }
  static register(req, res, next) {
    const { username, email, password } = req.body
    User
      .create({
        username,
        email,
        password
      })
      .then(data => {
        const token = jwt.sign({
          id: data.id,
          username: data.username,
          email: data.email
        }, process.env.SECRET)
        res.status(201).json(token)
      })
      .catch(err => {
        next(err)
      })
  }

  static read(req, res, next) {
    User
      .findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

}

module.exports = UserController