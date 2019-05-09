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

router.get('/:productId', function(req, res) {

});

router.post('/', function(req, res) {

});

router.put('/:productId', function(req, res) {

});

router.delete('/:productId', function(req, res) {

});

router.get('/:category', function(req, res) {

});

router.get('/:name', function(req, res) {

});

router.get('/:sex', function(req, res) {

});

router.get('/:price', function(req, res) {

});

module.exports = router;