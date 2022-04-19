const userLogin = require('../models/loginModel.js')
const seedData = require('./userLogin.json')

userLogin.deleteMany({})
.then(() => {
    return userLogin.insertMany(seedData)
})
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })