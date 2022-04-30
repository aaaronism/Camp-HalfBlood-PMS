const mongoose = require("../db/connection.js")

const annSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        info: {type: String, required: true},
    }
)

const announcementData = mongoose.model('ann', annSchema)

module.exports = announcementData