const mongoose = require("../db/connection.js")

const loginSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        house: {type: String, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true},
        role: {type: String, required: true}
    }
)

const loginData = mongoose.model('login', loginSchema)

module.exports = loginData