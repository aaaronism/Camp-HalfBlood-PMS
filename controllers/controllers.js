const express = require("express")
const { redirect } = require("express/lib/response")
const router = express.Router()
const userLogin = require('../models/loginModel')
const questModel = require('../models/questModel')


router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', async (req, res) => {
    const {username, password} = req.body
    let user, data;
    try {
        user = await userLogin.find({});
        data = await questModel.find({})

        userLogin.findOne({username, password}, 
            (err, user) => {
            if (err) {
                console.log("hi");
            }
            else if (!user) {
                res.redirect('back')
            }
            else 
            res.render('camp', {screenname: user["name"], god: user["house"], quests: data})
        });
    } catch(e) {
        return next(e)
    }
})

router.get('/camp', (req, res) => {
    questModel.find({}, (err, data) => {
        res.render('camp')
    })
})

router.get('/quests', (req, res) => {
    questModel.find({}, (err, data) => {
        res.render ('quests', {
            quests: data
        })
    })
})

router.get('/quests/:id', (req, res) => {
    questModel.findById(req.params.id).then((data) => {
        res.render('indQuest', 
        {
            questName: data["title"],
            questSum: data["summary"],
            questTime: data["timeline"],
            questBud: data["budget"],
            questComp: data["complete"]
        })
    })
    .catch(console.error);
})

router.get('/message', (req, res) => {
    res.render('comm')
})

const usercontrollers = router
module.exports = usercontrollers