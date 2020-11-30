const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controllers/albums');

router.get('/', albumsCtrl.index);
router.get('/new', isLoggedIn, albumsCtrl.new);
router.get('/:id', albumsCtrl.show)
router.post('/', albumsCtrl.create);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;