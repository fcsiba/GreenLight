var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
/* GET users listing. */
var url = 'mongodb://localhost:27017/GreenLight';
router.post('/', function(req, res, next) {

    var Name = req.body.Name;
    var fName = req.body.FirstName;
    var LName = req.body.LastName;
    var Email =  req.body.Email;
    var MobileNo = req.body.MobileNo; 
    var Role= req.body.RoleName;
    var Password = req.body.Password;
    mongo.connect(url, function(err, db )  {
        assert.equal(null, err);
            db.collection("Users").update({_id:objectId(ID)},{$set:{Name:Name ,FirstName:fName,LastName:LName,Email:Email, MobileNo:MobileNo,roleName:Role,Password:Password }}, 
      
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
