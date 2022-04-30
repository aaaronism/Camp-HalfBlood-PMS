const express = require("express")
const { redirect } = require("express/lib/response")
const router = express.Router()
const userLogin = require('../models/loginModel')
const questModel = require('../models/questModel')
const annModel = require('../models/announceModel')
const messModel = require('../models/messageModel')


router.get('/', (req, res) => {
    res.render('login')
})

// router.get('/camp', (req, res) => {
//     res.render('campadmin')
// })

router.get('/quests/new', (req, res) => {
    res.render('newQuest')
})

router.get('/quests/:id', (req, res) => {
    questModel.findById(req.params.id).then((data) => {
        res.render('indQuest', {quest: data})
    })
    .catch(console.error);
})

router.get('/quests/:id/edit', (req, res) => {
    const id = req.params.id;
    questModel.findById(id)
    .then((data) => {
        res.render('editQuest', {quest: data})
    })
    .catch(console.error)
})

router.post('/quests', (req, res) => {
    questModel.create(req.body).then((todo) => {
        res.redirect('back')
    })
    .catch(console.error)
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
                res.render('incorrect');
            }
            else {
                if (user["role"] === "admin") {
                    res.render('campadmin', {
                    screenname: user["name"],
                    god: user["house"],
                    quests: data})
                } else {
                    res.render('camp', {
                    screenname: user["name"],
                    god: user["house"],
                    quests: data})
            }
        }
        });
    } catch(e) {
        return next(e)
    }
})

router.put('/quests/:id', (req, res) => {
    const id = req.params.id;
    questModel.findOneAndUpdate(
        {_id: id},
        {
            title: req.body.title,
            summary: req.body.summary,
            timeline: req.body.timeline,
            budget: req.body.budget,
            complete: req.body.complete === "on",
        }
    ).then((data) => {
        res.redirect('back')
    })
    .catch(console.error)
})

router.delete('/quests/:id', (req, res) => {
    const id = req.params.id;
    questModel.findOneAndRemove({_id: id})
    .then(() => {
        res.redirect('/')
    })
    .catch(console.error)
})

// router.get('/message', (req, res) => {
//     res.render('comm')
// })

const usercontrollers = router
module.exports = usercontrollers