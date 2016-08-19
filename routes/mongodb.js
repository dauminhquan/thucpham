var mongodb = require('mongodb').MongoClient;
module.exports = function (url,callback){
    mongodb.connect(url, function (err, db) {
        if (err) {
            callback(err);
        }
        else {
            callback(null, db);
        }
    })
}