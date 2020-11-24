const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../controllers/ratings');

router.post('/albums/:id/ratings', ratingsCtrl.create);

module.exports = router;