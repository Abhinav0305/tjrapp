var express = require('express');
var router = express.Router();
var reminderModal = require('../modals/reminder');

/*------------Fetching a single pain entry-------------------*/
router.get('/:id?', function(request, response, next){
	reminderModal.getReminder(request.params.id,function(error,count){
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

/*------------Fetching all custom reminders for a patient-------------------*/
router.get('/patient/:id?', function(request, response, next){
	reminderModal.getAllRemindrsForPatient(request.params.id,function(error,count){
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

/*------------Create a reminder-------------------*/
router.post('/', function(request, response, next){
	reminderModal.addReminder(request.body,function(error,count){
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

/*------------Updating a reminder-------------------*/
router.put('/:id?', function(request, response, next){
	reminderModal.updateReminder(request.params.id,request.body,function(error,count){
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

/*------------Deleting a reminder-------------------*/
router.delete('/:id?', function(request, response, next){
	reminderModal.deleteReminder(request.params.id,function(error,count){
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
});

module.exports = router;