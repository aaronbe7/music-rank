const Album = require('../models/album');

module.exports = {
    index,
    show,
    new: newAlbum,
    create,
}

function index(req, res) {
    Album.find({}, function(err, albums) {
        console.log(albums);
        res.render('albums/index', { title: 'Albums', albums});
    })
}

function show(req, res) {
    Album.findById(req.params.id, function(err, album) {
            res.render('albums/show', { title: 'Album Detail', album });
    });
  }


function newAlbum(req, res) {
    res.render('albums/newAlbum', { title: 'New Album' });
  }

function create(req, res) {
    let album = new Album(req.body);
    album.save(function(err) {
        if(err) return console.log(err);
        res.redirect('/albums');
    })
}