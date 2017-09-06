var db = require('./database');

var auth = {
		/*---------------CREATE-----------------*/
		// Presists data regarding authentication.
		addAuthDetail : function(authDetails, callback){
		return db.query('INSERT INTO USERS SET ?', authDetails, callback);
	},

		/*---------------READ-----------------*/
		// Feteches the password for the given patient id.
		getPassword : function(id, callback){
			return db.query('select password from PatientsAuth where id=?',[id], callback);
	}
};
module.exports = auth;
