const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema ({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    name: {
        type: String,
        required: true,
    },
    type : {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Room', roomSchema)