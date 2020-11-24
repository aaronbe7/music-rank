const express = require('express');
const router = express.Router();
const albumsCtrl = require('../controllers/albums');

router.get('/', albumsCtrl.index);
router.get('/new', albumsCtrl.new);
router.get('/:id', albumsCtrl.show)
router.post('/', albumsCtrl.create);

module.exports = router;