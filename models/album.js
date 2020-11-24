const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    rating: Number, 
  });

const albumSchema = new mongoose.Schema({
    albumTitle: String,
    artist: String,
    releaseYear: String,
    genre: String,
    rating: [ratingSchema],
})

// Create your User Model

module.exports = mongoose.model('Album', albumSchema);