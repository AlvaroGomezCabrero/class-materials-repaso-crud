const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema
const parkSchema = new Schema({
    name: String,
    description: String,
    active: {type: Boolean}
   
}) 

const Park = mongoose.model('Park', parkSchema)

module.exports = Park;