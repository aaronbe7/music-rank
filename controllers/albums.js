const Album = require('../models/Album');

module.exports = {
    index,
    new: newAlbum,
    create,
}

function index(req, res) {
    Album.find({}, function(err, albums) {
        console.log(albums);
        res.render('albums/index', { title: 'Albums', albums});
    })
}

function newAlbum(req, res) {
    res.render('albums/new', { title: 'New Album' });
  }

function create(req, res) {
    let album = new Album(req.body);
    album.save(function(err) {
        if(err) return console.log(err);
        res.redirect('/albums');
    })
}