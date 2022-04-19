const express = require("express")
const { redirect } = require("express/lib/response")
const router = express.Router()
const userLogin = require('../models/loginModel')
const questModel = require('../models/questModel')

// router.get("/", (req, res, next) => {
//     userLogin.find({})
//     .then(gifs => {
//         res.send(gifs)})
//         .catch(next);
// })

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
        if (!user) {
            res.redirect('back')
        }
        res.redirect('/camp')
    })
})

router.get('/camp', (req, res) => {
    const {title, complete} = req.body
res.render('camp', {quests: questModel})
})

// router.get("/login", (req, res) => {
//     const user = { name: req.body.username, password: req.body.password}
// })

const usercontrollers = router
module.exports = usercontrollers