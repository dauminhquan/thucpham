var express = require('express');
var search = express.Router();
var mongodb = require('./mongodb.js');
search.get('/', function (req, res){
    if (req.query) {
        var name = req.query.tenthucpham;
       
        mongodb('mongodb://localhost:27017/ThucPham', function (err, db){
           
            if (err) {

                res.send('err');
            } else {
                var collection = db.collection('Thongtinthucpham');
                collection.find({ "$text" : { "$search": name } }, {_id:0}).toArray(function (er, dt){
                    if (!er) {
                        res.json(dt);
                    }
                    else {
                        res.send(null);
                    }
                    db.close();
                })
            }
        })
    }
})
module.exports = search;