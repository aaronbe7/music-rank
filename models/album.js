const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const albumSchema = new mongoose.Schema({
    albumTitle: String,
    artist: String,
    releaseYear: String,
    genre: String,
})

// Create your User Model

module.exports = mongoose.model('Album', albumSchema);