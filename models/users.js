const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;