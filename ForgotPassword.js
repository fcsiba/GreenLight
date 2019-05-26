var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var generator = require('generate-password');
var Mailgen = require('mailgen');
var url = 'mongodb://localhost:27017/Greenlight';
var password = generator.generate({
    length: 10,
    numbers: true
});
var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'Green Light',
        link: 'https://GreenLight.js/'
    }
  });
  var email = {
    body: {
        name: 'GreenLight',
        intro: 'Welcome to GreenLight! We are very excited to have you on board.',
        action: {
            instructions: 'Please find below your login Credentials:',
            button: {
       }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
};
var emailBody = mailGenerator.generate(email);
var emailText = mailGenerator.generatePlaintext(email);
  module.exports = router;