var express = require('express');
var router = express.Router();
var activityModal = require('../modals/activity-modal');

/*------------Fetching all Activity entries-------------------*/
router.get('/', function(request, response, next){
	activityModal.getAllActivity(function(error,count){
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
/*------------Fetching a single Activity entry-------------------*/
router.get('/:id?', function(request, response, next){
	activityModal.getActivity(request.params.id,function(error,count){
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

/*------------Fetching a single Type of Activity entry-------------------*/
router.get('/:id?', function(request, response, next){
	activityModal.getTypeOfAtivity(request.params.id,function(error,count){
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

/*------------Fetching all Activity entries for a patient-------------------*/
router.get('/patient/:id', function(request, response, next){
	activityModal.getAllActivityForPatient(request.params.id,function(error,count){
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

/*------------Create a Activity entry-------------------*/
router.post('/', function(request, response, next){
	var data = {"act_id" : request.body.act_id,"patient_id" : request.body.patient_id, "duration" : request.body.duration,"rec_time" : request.body.rec_time};
	activityModal.addActivity(request.body,function(error,count){
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

/*------------Updating a Activity entry-------------------*/
/*router.put('/:id?', function(request, response, next){
	activityModal.updateActivity(request.params.id,request.body,function(error,count){
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
});*/

/*------------Deleting a Activity entry-------------------*/
/*router.delete('/:id?', function(request, response, next){
	activityModal.deleteActivity(request.params.id,function(error,count){
	  if(error)
		{
			console.log('Error: ' + error);
		}
	  else
	  	{
		  	response.json({"status": "Deleted", "code": 200});	
			console.log(response);
	  }
	});
});*/

module.exports = router;