const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({

    name : {
        type: String,
        required:true,
    },
    username: {
        type: Number,
        required: true

    }

}) 

module.exports = mongoose.model ('test', testSchema)