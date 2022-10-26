var express = require('express');
var router = express.Router();
var db = require('../utils/db')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
