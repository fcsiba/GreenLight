var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/Greenlight';
var resultArray = [];
router.post('/', function(req, res, next) {
  var x=req.body.name;
  var y=req.body.password;
 
  mongo.connect(url, function(err, db )  {


    assert.equal(null, err);
    var cursor = db.collection('Users').find({email:x,password:y});
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push( 
        doc);

    // resultArray["name"]       
    }, function() {
      if ( resultArray.length == 0) {
        var msg1="don't";
        res.send(msg1);
     
    }
    else {
      var msg="do ";
      var token = "kjdgksdgfhfd";
      
      res.send(msg+token);
    }
      db.close();

    });
  });

});
module.exports = router;