const express = require('express')
const router = express.Router()
const passport = require('passport')

// 載入 user model
const db = require('../models')
const User = db.User

router.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = router