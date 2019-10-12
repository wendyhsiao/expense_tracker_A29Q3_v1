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
  res.send('新增頁')
})

router.post('/', authenticated, (req, res) => {
  res.send('新增頁')
})

// 修改支出頁面
router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改頁')
})

router.put('/:id', authenticated, (req, res) => {
  res.send('修改頁')
})

// 刪除支出頁面
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('刪除頁')
})

module.exports = router