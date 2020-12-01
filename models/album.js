const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    ratingScore: Number, 
    guest: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
    }
});

const albumSchema = new mongoose.Schema({
    albumTitle: {
      type: String,
    },
    artist: {
      type: String,
    },
    releaseYear: {
      type: String,
    },
    genre: {
      type: String,
    },
    guest: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
    },
    ratings: [ratingSchema],
})

module.exports = mongoose.model('Album', albumSchema);