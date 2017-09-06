var express = require('express');
var router = express.Router();
var generator = require('generate-password');
var simpleAuthModal = require('../modals/authentication-modal');

/* Creates a record for the patient with the given patient id and password.
	 	@ Body -->  {"id" : request.body.id, "password" : request.body.pswd, "first_login_date" : request.body.login_date}; 	
	 	@ id                -->		Indicates the unique ID of the patient assigned.
	 	@ password          -->		Indicates the aphanumeric password assigned.
	 	@ first_login_date  -->		Indicates the date the patient had first logged in from the mobile device. (to be sent only during the first login.)
*/
router.post('/', function(request, response, next){
	var data = {"id" : request.body.id, "password" : request.body.pswd, "first_login_date" : request.body.login_date};
	simpleAuthModal.addAuthDetail(data,function(error,count){
	  if(error)
		{
			console.log('Error: ' + error);
		}
	  else
	  	{
	  		if(response.statusCode == 200){
		  		response.statusCode = 201;
		  		response.statusMessage = "Created";
		  		var res = {"id": count.insertId, "creation_date" : new Date()};
				response.json(res);
				console.log(res);
	  		}
	  }
	});
});

module.exports = router;