
const express = require('express')
const app = express()

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 3000

const db = require('./models')
const Record = db.Record
const User = db.User

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// 使用路由器
app.use('/', require('./routes/home'))
app.use('/users', require('./routes/user'))

// 設定 express port 3000
app.listen(port, () => {
  console.log(`App is running on port ${port}!`)
})