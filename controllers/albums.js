const Album = require('../models/album');

module.exports = {
    index,
    show,
    new: newAlbum,
    create,
}

function index(req, res) {
    Album.find({}, function(err, albums) {
        res.render('albums/index', { title: 'Albums', albums});
    })
}

function show(req, res) {
    const user = req.session.passport && req.session.passport.user;
    Album.findById(req.params.id)
    .populate("ratings.guest").exec(function(err, album) {
        res.render('albums/show', { title: 'Album Detail', album, guest: user});
    }); 
}

function newAlbum(req, res) {
    res.render('albums/newAlbum', { title: 'New Album' });
}

function create(req, res) {
    req.body.guest = req.user._id;
    let album = new Album(req.body);
    album.save(function(err) {
        if(err) return console.log(err);
        res.redirect('/albums');
    })
}