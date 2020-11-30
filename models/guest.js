const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
})

// Create your User Model

module.exports = mongoose.model('Guest', guestSchema);