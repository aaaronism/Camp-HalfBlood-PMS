const questModel = require('../models/questModel.js')
const questSeedData = require('./quests.json')

questModel.deleteMany({})
.then(() => {
    return questModel.insertMany(questSeedData)
})
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })