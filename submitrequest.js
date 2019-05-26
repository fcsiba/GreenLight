var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/Greenlight';
var resultArray = [];



router.post('/', function(req, res, next) {
    var Name = req.body.Name;
    var CNICNo = req.body.CNICNo;
    var Email =  req.body.Email;
    var MobileNo = req.body.MobileNo; 
    var DateOfVisit = req.body.DateOfVisit;
    var TimeOfVisit = req.body.TimeOfVisit;
    var CarPlateNo = req.body.CarPlateNo;
    var Role= req.body.RoleName;
    
    mongo.connect(url, function(err, db )  {

      assert.equal(null, err);
      db.collection('Requests').insertOne({Name:Name , CNICNo:CNICNo ,Email:Email, MobileNo:MobileNo ,DateOfVisit:DateOfVisit,TimeOfVisit:TimeOfVisit,CarPlateNo:CarPlateNo, roleName:Role}, 
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
