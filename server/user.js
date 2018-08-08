const express = require('express');
const router = express.Router;

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const User = require('../models/user');

router.post('/', (req, res, next) => {

})