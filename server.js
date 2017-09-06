/*Package declaration for usage*/
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var ip = require('ip');

/*Loads routes defined in the below modules.*/
var painService = require('./routes/pain-entry');
var assesmentService = require('./routes/assessment-entry');
var userService = require('./routes/user-entry');
var activityService = require('./routes/activity-entry');
var authService = require('./routes/authentication');
var api = '/api/v1'


/*Configuring the app to use bodyParser, which lets us get the data from a POST*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*Enabling CORS -- Cross-Origin Resource Sharing*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*Services, defines the endpoints PATH's to access the RESTful resources*/
router.use('/pain-entries', painService);
router.use('/user', userService);
router.use('/authentication', authService);
//router.use('/patientCredentials', patientCredentialService);
router.use('/activity-entries',activityService);
router.use('/assessment-entries',assesmentService);
app.use(api, router);

/*Set dev port*/
var port = process.env.PORT || 5353;
var serverLoc = 'http://' + ip.address() + ':' + port;
/*Start server*/
app.listen(port);
console.log('\n=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');
console.log('Services available on ' + serverLoc + api);
console.log('SERVER RUNNING');