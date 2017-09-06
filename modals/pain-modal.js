var db = require('./database');

var pain = {
		/*---------------CREATE-----------------*/
		addPain : function(pain, callback){
		return db.query('INSERT INTO PainEntry SET ?', pain, callback);
	},

		/*---------------READ-----------------*/
		// All pain entries in the database.
		getAllPain : function(callback){
			return db.query('select * from PainEntry order by creation_date desc',[], callback);
	},
		
		// Single pain entry.
		getPain : function(id, callback){
		return db.query('select * from PainEntry where id=?',[id], callback);
	},
		
		// All recorded pain for patient id.
		getAllPainForPatient : function(id, callback){
		return db.query('select * from PainEntry where subjectID=?',[id], callback);
	},
	
		/*---------------UPDATE-----------------*/
		updatePain : function(id, pain, callback){
		return db.query("update PainEntry set painLevel=?, note=? where id=?",[pain.painLevel, pain.note, id], callback);
	},	

		/*---------------DELETE-----------------*/
		deletePain : function(id, callback){
		return db.query("delete from PainEntry where id=?",[id], callback);
	}
};
module.exports = pain;