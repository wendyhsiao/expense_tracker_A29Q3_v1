const express = require('express')
const router = express.Router()
const passport = require('passport')

// 載入 model
const db = require('../models')
const User = db.User
const Record = db.Record
// 載入 auth middleware
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error('user not found')

      return Record.findAll({ where: { UserId: req.user.id } })
    })
    .then((records) => {
      return res.render('index', { records: records })
    })
    .catch((error) => {
      return res.status(422).json(error)
    })
})

module.exports = router