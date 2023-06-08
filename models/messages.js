const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
    message: {
        type: String
    },
    firstName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contact'
    },
    lastName: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'contact' 
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('message', MessageSchema);