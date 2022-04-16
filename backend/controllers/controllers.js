const express = require("express")
const { redirect } = require("express/lib/response")
const router = express.Router()
const userLogin = require('../models/loginModel')

router.get("/", (req, res, next) => {
    userLogin.find({})
    .then(gifs => {
        res.send(gifs)})
        .catch(next);
})

const usercontrollers = router
module.exports = usercontrollers