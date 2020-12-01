const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
})

module.exports = mongoose.model('Guest', guestSchema);