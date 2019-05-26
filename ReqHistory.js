var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

/* GET users listing. */

var url = 'mongodb://localhost:27017/Greenlight';
router.get('/', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db)  {
    assert.equal(null, err);
    var cursor = db.collection('Requests').find();     
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
      
    }, function() {
      db.close();
      res.json(
        resultArray
          
            );
    });
  });
});
module.exports = router;