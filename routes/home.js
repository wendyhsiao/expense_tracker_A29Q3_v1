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

      for (let record in records) {
        const date = records[record].dataValues.date
        // const yyyy = date.slice(0, 4)
        // const mm = date.slice(6, 7)
        // const dd = date.slice(9, 10)
        records[record].dataValues.dateNew = date.toString()
        // records[record]._previousDataValues.dateNew = date.toString()
        // [yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-')
        console.log('record', records[record].dataValues.date)
        console.log('record', records[record].dataValues.dateNew)
      }
      console.log('records', records)
      return res.render('index', { records: records })
    })
    .catch((error) => {
      return res.status(422).json(error)
    })
})

module.exports = router