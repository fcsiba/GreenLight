var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
/* GET users listing. */
var url = 'mongodb://localhost:27017/GreenLight';
router.post('/', function(req, res, next) {
    var QRCode=req.body.QRCode;
    ongo.connect(url, function(err, db )  {
        assert.equal(null, err);
            db.collection("Requests").update({_id:objectId(ID)},{$set:{QRCode:QRCode }}, 
      
                function (error) {
                  if(error) {
                      res.send("dont");
                      
                     // return 
                  } else {
                      res.send("do");
                    // return 
                  }
              });
        });
  });
module.exports = router;
