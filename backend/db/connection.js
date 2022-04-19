const mongoose = require('mongoose')

const mongoURI = process.env.NODE_ENV === "production"
? process.env.DB_URL
: "mongodb+srv://aaaronism:JccdQ2oSSM8BLdwj@camphalfblood.no61s.mongodb.net/userData?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
.then(instance => console.log(`connected to ${instance.connections[0].name}`))
.catch(error => console.log('failed conn:', err))

module.exports = mongoose