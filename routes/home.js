const express = require('express')
const router = express.Router()
const passport = require('passport')
const Handlebars = require('handlebars')

// 載入 model
const db = require('../models')
const User = db.User
const Record = db.Record
// 載入 auth middleware
const { authenticated } = require('../config/auth')

Handlebars.registerHelper('select', function (selected, options) {
  console.log('options.fn(this)', options.fn(this))
  return options
    .fn(this)
    .replace(
      'value="/?category=' + selected + '"',
      'value="/?category=' + selected + '" selected="selected"'
    )
})

const categoryIcon = {
  houseware: `<i class="fas fa-home fa-2x" id="fa-home"></i>`,
  traffic: `<i class="fas fa-shuttle-van fa-2x" id="fa-shuttle-van"></i>`,
  entertainment: `<i class="fas fa-grin-beam fa-2x" id="fa-grin-beam"></i>`,
  food: `<i class="fas fa-utensils fa-2x" id="fa-utensils"></i>`,
  other: `<i class="fas fa-pen fa-2x" id="fa-pen"></i>`
}

router.get('/', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error('user not found')
      let filterObject = { where: { UserId: req.user.id } }
      if (req.query.category) {
        filterObject.where.category = req.query.category
      }
      console.log('filterObject', filterObject.where)

      return Record.findAll(filterObject)
    })
    .then((records) => {
      let totalAmount = 0
      for (let record in records) {
        totalAmount += records[record].amount
        records[record].icon = categoryIcon[records[record].category]

        let date = records[record].date
        let yyyy = date.getFullYear()
        let mm = date.getMonth() + 1
        let dd = date.getDate()
        var date2 = [yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-')
        records[record].dateNew = date2
      }
      return res.render('index', { records: records, totalAmount, categorySelect: req.query.category })
    })
    .catch((error) => {
      return res.status(422).json(error)
    })
})

module.exports = router