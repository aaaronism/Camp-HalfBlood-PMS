const express = require("express")
const { redirect } = require("express/lib/response")
const router = express.Router()
const userLogin = require('../models/loginModel')
const questModel = require('../models/questModel')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    const {username, password} = req.body
    userLogin.findOne({username, password},
        (err, user) => {
        if (err) {
            console.log("hi");
        }
        else if (!user) {
            res.redirect('back')
        }
        else res.redirect('/camp')
    })
})

router.get('/camp', (req, res) => {
    questModel.find({}, (err, data) => {
        res.render('camp', {
            quests: data
        })
    })
})

router.get('/quests', (req, res) => {
    questModel.find({}, (err, data) => {
        res.render ('quests', {
            quests: data
        })
    })
})

const usercontrollers = router
module.exports = usercontrollers