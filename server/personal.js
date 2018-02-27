const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const Opinion = require('../models/opinion');
const Email = require('../models/email');

//const clientID = '459612530252-22upbserlv47oc95utdhi11nq2o809bm.apps.googleusercontent.com';
//const clientSecret = 'nNXxJtQT5fjsmwu1GrwtDlFg';

router.post('/', function(req, res, next){
    if (req.body.name &&
        req.body.lastName &&
        req.body.email &&
        req.body.opinion) {
            
            var opinion = new Opinion({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                opinion: req.body.opinion
            });
        
            opinion.save(function(err, result){
                if (err) {
                    return res.status(500).json({
                        message: 'An error occurred',
                        error: err
                    });
                }
                 res.status(200).json({
                        message: 'Opinion saved',
                        obj: result
                    });
                
            });

            var email = new Email({
                email: req.body.email,
                content: req.body.opinion
            });

            var smtpTransport = nodemailer.createTransport({
                    service: "gmail",
                    host: "gsmtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                            type: "OAuth2",
                            user: "sheldoneinsestein@gmail.com",
                            //pass: "shel4583",
                            clientId: "459612530252-g9n6b63uo94kn61jta4k97vrvddm64f5.apps.googleusercontent.com",
                            clientSecret: "lBg_9wgrjof-lcZ07y2RM777",
                            accessToken: "ya29.GltuBbkjLN1FDtPk8h5f9_7OTGO5aJ0CrLoxojx10hc3cRaYbJa9n-8PganlnA1h46GQIZQckj9CSSN8l3w1Y_vHR_vvJWhho18Qxg30vijwj1NfDkU4wb09hIxE",
                            refreshToken: "1/Rjxbr3HpoBka4sXOGUWcwNB_05w5DNkz-MpVsqKbH3iqobAGWfap36Eu2NJ9vElG"
                            
                    }
                });
                smtpTransport.verify(function(error, success) {
                    if (error) {
                            console.log(error);
                    } else {
                            console.log('Server is ready to take our messages');
                    }
});
                /*smtpTransport.set('oauth2_provision_cb', (user, renew, callback)=>{
                    let accessToken = userTokens[user];
                    if(!accessToken){
                        return callback(new Error('Unknown user'));
                    }else{
                        return callback(null, accessToken);
                    }
                });*/
                //Creating mail optinos
                var mailOptions = {
                    from: email.email, // sender address
                    to: 'pandy_2013@hotmail.com', // list of receivers
                    subject: 'Opinion from the Web', // Subject line
                    text: email.content, // plain text body
                };

        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function(err, result){
            if (err) {
               console.log(err);
            }
            console.log(result);
            email.save(function(err, email){
                if (err) return next(err);
                console.log(email);
            });
         });
        }
});

module.exports = router;