var db = require('./database');

var reminder = {
		/*---------------CREATE-----------------*/
		addReminder : function(reminder, callback){
		return db.query('INSERT INTO Reminder SET ?', reminder, callback);
	},

		/*---------------READ-----------------*/
		// Single reminder entry.
		getReminder : function(id, callback){
		return db.query('select * from Reminder where id=?',[id], callback);
	},
		
		// All saved reminder for patient id.
		getAllRemindersForPatient : function(id, callback){
		return db.query('select * from Reminder where patient_id=?',[id], callback);
	},
	
		/*---------------UPDATE-----------------*/
		updateReminder : function(id, reminder, callback){
		return db.query("update Reminder set level=?, note=? where id=?",[reminder.level, reminder.note, id], callback);
	},	

		/*---------------DELETE-----------------*/
		deleteReminder : function(id, callback){
		return db.query("delete from Reminder where id=?",[id], callback);
	}
};
module.exports = reminder;