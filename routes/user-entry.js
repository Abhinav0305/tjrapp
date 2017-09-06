var express = require('express');
var router = express.Router();
var userModal=require('../modals/user-modal');
var bcrypt = require('bcrypt-nodejs');

router.post('/',function (request,response,next) {
    var userId=request.body.username;
    var password=request.body.password;
    console.log(userId+" "+password);
    userModal.getUser(userId,function (error,rows) {
        if(error){
            response.statusCode=400;
            response.statusMessage="Bad requests";
            console.log("Err "+error);
        }else{
            console.log(rows);
            var passwordInServer=rows[0].password;
            //var passwordToSave=bcrypt.hashSync(password);
            //console.log(passwordToSave);
            //var compareValue=bcrypt.compareSync(password,passwordInServer);
            var date=new Date();
            var currentMonth=date.getMonth()+1;
            var currentYear=date.getFullYear();
            var currentTime=date.getHours()+":"+date.getMinutes()+":"+date.getMilliseconds();
            var currentDateTime=currentYear+"-"+currentMonth+"-"+date.getDate()+" "+currentTime.slice(0,-1);
            console.log(currentDateTime);
			var compareValue=password.trim() === passwordInServer.trim();
			console.log("hello");
			console.log(compareValue);
            if(compareValue){
				userModal.updateLastLoginDate(currentDateTime,userId,function(error,rows){
					if(error){
						console.log("error");
					}else{
						console.log("success");
					}
				});
                response.statusCode=200;
                response.statusMessage="OK";
            }else{
                response.statusCode=401;
                response.statusMessage="Unauthorized ";
                console.log('Incorrect password provided');
            }
            var showResp={"message" : response.statusMessage};
            response.json(showResp);
            console.log(rows+' '+compareValue);
        }
    });
});
router.get('/', function(request, response, next){
	userModal.getAllUsers(function(error,count){
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
module.exports=router;