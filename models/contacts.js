const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: { 
        type: String
    }
    ,
    Phone: { 
        type: Number
    }
    
},
    {
        timestamps: true
    })

module.exports = mongoose.model('contact', ContactSchema);
