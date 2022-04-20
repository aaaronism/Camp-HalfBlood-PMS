const mongoose = require("../db/connection.js")

const questSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        complete: {type: Boolean, required: false}
    },
{timestamps: true}
)

const questData = mongoose.model('quest', questSchema)

module.exports = questData