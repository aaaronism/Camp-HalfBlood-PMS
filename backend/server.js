const express = require("express")
const app = express()
const controllers = require('./controllers/controllers')
const userLogin = require('./models/loginModel')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', controllers)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})