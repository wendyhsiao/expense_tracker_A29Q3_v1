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
      console.log('record', records)
      for (let record in records) {
        console.log('record.date', records[record].date)
        let date = records[record].date
        let yyyy = date.getFullYear()
        let mm = date.getMonth() + 1
        let dd = date.getDate()
        var date2 = [yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-')
        records[record].dateNew = date2
      }
      return res.render('index', { records: records })
    })
    .catch((error) => {
      return res.status(422).json(error)
    })
})

module.exports = router