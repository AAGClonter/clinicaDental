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
    const images = [
        {
            "slide": "0",
            "image": "first-image",
            "href": "../assets/images/carousel-images/concordancia.png"
        },
        {
            "slide": "1",
            "image": "second-image",
            "href": "../assets/images/carousel-images/labios-BN-small.png"
        },
        {
            "slide": "2",
            "image": "third-image",
            "href": "../assets/images/carousel-images/men.png"
        },
        {
            "slide": "3",
            "image": "forth-image",
            "href": "../assets/images/carousel-images/perfect.png"
        },
        {
            "slide": "4",
            "image": "fifth-image",
            "href": "../assets/images/carousel-images/sombrerito.png"
        }
    ];
    for (image in images) {
    let image = new Image({
        slide: image.slide,
        image: image.image,
        href: image.href
    });

        image.save((err, image) => {
            if (err) return next(err);
            res.status(200).json({
                message: 'Image created',
                obj: image
            });
        });
    }
});
// </POST>

module.exports = router;