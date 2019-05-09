const express = require('express');
const router = express.Router();
const error = require('./helpers').error;
const util = require('util');
const indicative = require('indicative');
const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.MY_BLOG_SECRET;

router.get('/', function(req, res) {

});

router.get('/:issueId', function(req, res) {

});

router.post('/', function(req, res) {

});

router.put('/:issueId', function(req, res) {

});

router.delete('/:issueId', function(req, res) {

});

router.get('/:category', function(req, res) {

});

module.exports = router;