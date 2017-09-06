var express = require('express');
var router = express.Router();
var simpleAuthModal = require('../modals/authentication-modal');
var generator = require('generate-password');

/*---------------Generates a random 12 character aphanumeric string as password.---------------*/
router.post('/', function(request, response, next){
	console.log('Request -->' +request.body.user_name);
	var password = generator.generate({
	    length: 12,
	    numbers: true,
	    symbols: false,
	    excludeSimilarCharacters: true,	
	    uppercase: true

	});
		var data={"user_name" : request.body.user_name , "password" : password};
		simpleAuthModal.addAuthDetail(data,function(error,count){
			if(error){
				console.log('Error: ' + error);
				response.statusCode = 404;
				response.statusMessage = "Error";
			}else{
				console.log(request.body.username);
				response.statusCode = 200;
				response.statusMessage = "OK";
				var res = {"password" : password};
				response.json(res);
				console.log(res);	
			}
		});
});

/*------------Validates the entered password with the one stored in the database-------------------*/
router.get('/validate?', function(request, response, next){
	var pswd = request.get('pswd');
	simpleAuthModal.getPassword(request.get('id'), function(error,results){
		if(error)
		{
			response.statusCode = 400;
			response.statusMessage = "Bad Request";
			console.log('Error: ' + error);
		}
	  else
	  	{
	  		if(results.length ==0){
				response.statusCode = 400;
				response.statusMessage = "Bad Request";
				console.log('No record found for ID:' +request.get('id'));
	  		}else if(pswd === results[0].password){
		  		response.statusCode = 200;
				response.statusMessage = "OK";
				console.log('Password matched');
	  		}else{
	  			response.statusCode = 401;
				response.statusMessage = "Unauthorized";
				console.log('Incorrect password');
	  		}	
	  	}
	  	var showResp = {"message" : response.statusMessage}
		response.json(showResp);	
	});
});


module.exports = router;