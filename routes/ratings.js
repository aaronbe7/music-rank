const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../controllers/ratings');

router.post('/albums/:id/ratings', isLoggedIn, ratingsCtrl.create);
router.post('albums/:id', ratingsCtrl.delete)

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    } else {
        res.redirect('/auth/google')
    }
}

module.exports = router;