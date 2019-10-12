const express = require('express')
const router = express.Router()
// 載入 model
const db = require('../models')
const User = db.User
const Record = db.Record
// 載入 auth middleware
const { authenticated } = require('../config/auth')

// 首頁
router.get('/', authenticated, (req, res) => {
  return res.redirect('/')
})

// 新增支出頁面
router.get('/new', authenticated, (req, res) => {
  const objDate = new Date(now)
  const mm = objDate.getMonth() + 1
  const dd = objDate.getDate()
  const today = [
    objDate.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
  ].join('-')
  res.render('new', { today: today })
})

router.post('/', authenticated, (req, res) => {
  Record.create({
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    amount: req.body.amount,
    UserId: req.user.id
  })
    .then((record) => { return res.redirect('/') })
    .catch((error) => { return res.status(422).json(error) })
})

// 修改支出頁面
router.get('/:id/edit', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error('user not found')
      return Record.findOne({
        where: { Id: req.params.id, UserId: req.user.id }
      })
    })
    .then((record) => {
      return res.render('edit')
    })

})

router.put('/:id', authenticated, (req, res) => {
  Record.findOne({
    where: { Id: req.params.id, UserId: req.user.id }
  })
    .then((record) => {
      record.name = req.body.name
      record.category = req.body.category
      record.date = req.body.date
      record.amount = req.body.amount

      return record.save()
    })
    .then((record) => { return res.redirect('/') })
    .catch((error) => { return res.status(422).json(error) })
})

// 刪除支出頁面
router.delete('/:id/delete', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error('user not found')

      return Record.destroy({
        where: { UserId: req.user.id, Id: req.params.id }
      })
    })
    .then((record) => { return res.redirect('/') })
    .catch((error) => { return res.status(422).json(error) })
})

module.exports = router