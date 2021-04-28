var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
    
    var password = req.body.password;
    var email = req.body.email;
    
    console.log(" Email: " + email + " Password: " + password);

    'use strict';

    let rawdata = fs.readFileSync('users.json');
    let users = JSON.parse(rawdata);
    console.log(users);

    for (var index = 0; index < users.length; ++index) {

        var user = users[index];
       
        if(user.email == email && user.password == password){
          console.log("works");
          break;
        }
        else{
          var error = "Password is wrong";
          res.render('error', {error: error} );
        }
    }

});

module.exports = router;