var express = require('express');
var path = require('path');
var thucpham = require('./thucpham.js');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../web','index.html'));
});
router.use('/thucpham', thucpham);
module.exports = router;