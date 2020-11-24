const Album = require('../models/album');

module.exports = {
  create,
};

function create(req, res) {
  Album.findById(req.params.id, function(err, album) {
    album.reviews.push(req.body);
    album.save(function(err) {
      res.redirect(`/album/${album._id}`);
    });
  });
}