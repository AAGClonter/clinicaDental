'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.json([
        {
            "slide": "0",
            "image": "first-image",
            "addresse": "../assets/images/carousel-images/concordancia.png"
        },
        {
            "slide": "1",
            "image": "second-image",
            "addresse": "../assets/images/carousel-images/labios-BN-small.png"
        },
        {
            "slide": "2",
            "image": "third-image",
            "addresse": "../assets/images/carousel-images/men.png"
        },
        {
            "slide": "3",
            "image": "forth-image",
            "addresse": "../assets/images/carousel-images/perfect.png"
        },
        {
            "slide": "4",
            "image": "fifth-image",
            "addresse": "../assets/images/carousel-images/sombrerito.png"
        }
    ])
})