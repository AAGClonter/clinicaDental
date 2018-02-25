'use strict';
const express = require('express');
const router = express.Router();

// Model
const Image = require('../models/image');

// <GET>
router.get('/images', (req, res, next) => {
    Image.find({}, (err, images) => {
        if (err) return next(err);
        res.status(200).json({
            message: 'Images found',
            obj: images
        });
    });
});

// </GET>

// <POST>

router.post('/image', (req, res, next) => {
    let image = new Image({
        slide: req.body.slide,
        image: req.body.image,
        href: req.body.href
    });

    image.save((err, image) => {
        if (err) return next(err);
        res.status(200).json({
            message: 'Image created',
            obj: image
        });
    });
});
// </POST>

module.exports = router;