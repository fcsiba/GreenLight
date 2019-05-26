var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var generator = require('generate-password');
/* GET users listing. */
var url = 'mongodb://localhost:27017/Greenlight';
var resultArray = [];
router.post('/', function(req, res, next) {
    var Name = req.body.Name;
    var fName = req.body.FirstName;
    var LName = req.body.LastName;
    var Email =  req.body.Email;
    var MobileNo = req.body.MobileNo; 
    var Role= req.body.RoleName;
    var password = generator.generate({
    length: 10,
    numbers: true
});
    mongo.connect(url, function(err, db )  {

      assert.equal(null, err);
      db.collection('Requests').insertOne({Name:Name ,FirstName:fName,LastName:LName,Email:Email, MobileNo:MobileNo,roleName:Role,Password:password },
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
