const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const User = require('../models/user');

// Registering a new admin user example( an new employee)
router.post('/signup', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        securityPasscode: req.body.securityPasscode
    });

    let token = jwt.sign({id: user._id}, config.secret, {expiresIn: 86400});
    newUser.save((err, user) => {
        if (err) return next(err);
        res.status(200).json({
            auth: true,
            token: token
        });
    });
});

// Login method with a GET request
router.get('/me', (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(500).json({
                auth: false, 
                message: 'An error occurred'
            });
        }

        User.findById(decoded._id, (err, user) => {
            if (err) return next(err);
            if (!user) {
                return res.status(404).json({
                    auth: false,
                    message: 'User could not be found'
                });
            }

            res.status(200).json(user);
        });
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) return next(err);
        if (!user) {
            return res.status(404).json({
                auth: false,
                message: 'User could not be found'
            });
        }

        let password = bcrypt.compareSync(req.body.password, user.password);
        if (!password) {
            return res.status(401).json({
                auth: false,
                token: null
            });
        }

        let token = jwt.sign({id: user._id}, config.secret, { expiresIn: 86400 });
        res.status(200).json({
            auth: true,
            token: token
        });
    });
});

module.exports = router;
