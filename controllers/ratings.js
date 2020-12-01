const Album = require('../models/album');

module.exports = {
  create,
  delete: deleteRating,
  update,
};

function deleteRating(req, res) {
  Album.findOne({'ratings._id': req.params.id}, function(err, album) {
    album.ratings.remove(req.params.id);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
};

function update(req, res) {
  Album.findOne({'ratings._id': req.params.id}, function(err, album) {
    const ratingSubdoc = album.ratings.id(req.params.id);
    ratingSubdoc.ratingComment = req.body.ratingComment;
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}

function create(req, res) {
  Album.findById(req.params.id, function(err, album) {
    req.body.guest = req.user._id;
    album.ratings.push(req.body);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}


