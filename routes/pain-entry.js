var express = require('express');
var router = express.Router();
var painModal = require('../modals/pain-modal');

/*------------Fetching all pain entries-------------------*/
router.get('/', function(request, response, next){
	painModal.getAllPain(function(error,count){
	  if(error)
		{
			console.log('Error: ' + error);	
		}
	  else
	  	{
		  	response.json(count);	
			console.log(count);
	  }
	});
});	
/*------------Fetching a single pain entry-------------------*/
router.get('/:id?', function(request, response, next){
	painModal.getPain(request.params.id,function(error,count){
		if(error)
		{
			console.log('Error: ' + error);
		}
	  else
	  	{
		  	response.json(count);	
			console.log(count);
	  }
	});
});

/*------------Fetching all pain entries for a patient-------------------*/
router.get('/patients/:id', function(request, response, next){
	painModal.getAllPainForPatient(request.params.id,function(error,count){
	  if(error)
		{
			console.log('Error: ' + error);	
		}
	  else
	  	{
		  	response.json(count);	
			console.log(count);
	  }
	});
});	

/*------------Create a pain entry-------------------*/
router.post('/', function(request, response, next){
	var data = {"subjectId":request.body.subjectID, "painLevel":request.body.painLevel, "note":request.body.note, "joint":request.body.joint, "timeOfDay":request.body.timeOfDay, "time":request.body.time};
	painModal.addPain(data,function(error,count){
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

/*------------Updating a pain entry-------------------*/
router.put('/:id?', function(request, response, next){
	painModal.updatePain(request.params.id,request.body,function(error,count){
	  if(error)
		{
			console.log('Error: ' + error);
		}
	  else
	  	{
		  	response.json(count);	
			console.log(count);
	  }
	});
});

/*------------Deleting a pain entry-------------------*/
router.delete('/:id?', function(request, response, next){
	painModal.deletePain(request.params.id,function(error,count){
	  if(error)
		{
			console.log('Error: ' + error)
		}
	  else
	  	{
		  	response.json({"status": "Deleted", "code": 200});	
			console.log(response);
	  }
	});
});

module.exports = router;