const album = require('../models/album');
const { deleteOne } = require('../models/album');
const Album = require('../models/album');

module.exports = {
  create,
  delete: deleteRating,
};

function deleteRating(req, res) {
  Album.findOne({'ratings._id': req.params.id}, function(err, album) {
    album.ratings.remove(req.params.id);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
};

function create(req, res) {
  Album.findById(req.params.id, function(err, album) {
    album.ratings.push(req.body);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}


