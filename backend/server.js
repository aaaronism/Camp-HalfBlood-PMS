const express = require("express")
const methodOverride = require('method-override')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const controllers = require('./controllers/controllers')
const userLogin = require('./models/loginModel')
const questModel = require('./models/questModel')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))
app.use('/', controllers)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})