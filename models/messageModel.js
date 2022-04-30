const mongoose = require("../db/connection.js")

const messageSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        message: {type: String, required: true},
    }
)

const messageData = mongoose.model('message', messageSchema)

module.exports = messageData