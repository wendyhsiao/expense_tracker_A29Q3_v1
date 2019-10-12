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
  res.send('列出全部 Todo')
})

module.exports = router