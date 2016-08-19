var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});
router.get('/next', function (req, res, next){
    res.send('next....');
    next();
}), function (req, res){
    res.send('Hello');
}

router.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B!');
})
module.exports = router;