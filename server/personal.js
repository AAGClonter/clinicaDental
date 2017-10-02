const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const serviceId = "aaf732533b7ad3039b36cc0f9e7fc273276665cf";
const clientSecret = "P6FXYa6kDWFc-at9IHLUHhtU";
//const clientId = "867926266793-o6bs9ekc8ej77bq3go9tnkhbgqtnj6k2.apps.googleusercontent.com";
const clientId = "110711325964661728693";
const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCJ+RCFbPeeY7ER\nkOQ/RlrJoJL4ckbtMLBE62sA3ILMhso3c5+Lmy33cALQPp6Qhq0iv9HLJgumr7XH\nACGx4Dh/xBgzxuoi9RK4TBbwsnj6BxkdH/BagpN4mOPjYXYm0DPV/iQbz1CjercO\nd6lQbaYYy0SLTZZGuPZZf194STZ2OYkWo2BtA00AMYFSl5NeyJ1lkFVLpBRTjAPF\nkq4cySTjJQHkeAS7CNUJbGJYIIaCqWxrVVAH0f+5WBrshkWiN1i5gW5+TupCnfJ4\n24kA5sfk/EPkLum7p/ARzqzBNSvkUeSBGQLXoIAltjQhC2Ew3dpjyw18MdA3YwO7\nzXhlDdD/AgMBAAECggEAFoYHocBy1p3aVM5ydGHn2u0mZlNBgOG8j4O0VCUAtU12\ndYGf6gp11o79O+xSYQWbU1uSbrd8mhl/yJzHjgzXLFm2xGe/O+BbeKVImW0z5/KA\nsbXPvEwqBuXuozql2cWOBhZsOUipbAanG5WCmRP3/tQwEbhOGqgsjy+xRicC3Qm0\nv/NDntKLHLUs4CH71jiJzzIRoO2DRNPbYcNonnP9HYCsAAPBk8A+mj9NltmGNu52\nXDP921Y/MKY6JVCm2srHDXj0aNZdJUlp48qnr5pMZn70YV4X8oIouoksZh8F6aoo\nNl6mJFWoKGAFtCrgmrGwwmR0fQ+vbYPlGkXo83IvAQKBgQDBBfq/IRFLC6Z9U9vS\nT6rR03G5leZsqQ0s6qLKQ1kno3P5gpGY7qeBuOukWSvEOcocGVLQeoC01YoNYoPg\ncHTXB61EgDxQ3c3VkaYpqKryXYxCv3J2tk/PLF4yP7PkGOAIJ5xYXs46znGH/R0P\nJTOn1WiBRReKSfwPZWPX5f2yzQKBgQC2/RGzfvjqnoWuff640qYW72DzDlPjNQt3\n5rTwDlolKENPUjWBcPZ0HcLqYxfL2FRnSp2RTo8wsOI2nGISethpogEKTO//2Mmf\nxxFdcLBRCx83wYS2hBTcUTr3+G0Vj5c1KJKzFBq2tkZgnk1H9UbkfALMPiY5vjtf\n1cQocKGK+wKBgBuV1S33ddc5xQNoNqQpyonOJBSXvaSNzFo89iLd2SH3FB32cQRg\nJwQ8/0Avljem4qF9ZP5yY250jhQ3ng03RRtt928wvG36JO5+sDaH6lZU1DS904fv\nqhw7hQK9Y+IXQ/0mXAutEOAKnOMIY1zEvksgDp1a2HBk/mbc4JX8QnOJAoGAQ0Vj\n5YYPQkmGwbBGHXIrZxEXpiMlScjtb2XcLMhJ8ZEMtbN2QiDiKavrRTmqvODJnrN6\nm7mywGa2svbowvxwZN0O3teL/5WWAewwARb1asXY8ylsfaCu/pPKRvEIQT3pi7xf\nuf/xFiyKUOjBZmvQZR0F9kn+yYma0E+I7okBilMCgYBvT//cuYIsfYZRGubWqZya\nL6kMqgGJJ2nBYO0VAN+AjuL3dZjjUqghOWwB2lQBAx/KHdJttpBbRM65K5CdnCbn\nPcTZa562ABDzST/4liHyzzHyX5ORc+tuIYuOvRQU7SWgQxt9wUbU21PCIA/L4Vb8\no4Ile9MHT5LrfvmEfSA9ew==\n-----END PRIVATE KEY-----\n";


const Opinion = require('../models/opinion');
const Email = require('../models/email');

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
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        type: 'OAuth2',
                        user: "sheldoneinsestein@gmail.com",
                        serviceClient: clientId,
                        privateKey: privateKey 
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