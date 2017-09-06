var db = require('./database');

var user={
    getUser : function (id,callback) {
        return db.query('select * from users where user_name=?',[id],callback);
    },
	getAllUsers : function(callback){
		return db.query('select * from users order by user_name',[],callback);
	},
	updateLastLoginDate : function(id1,id2,callback){
		return db.query('Update users set ? where ?',[{last_login_date : id1},{user_name : id2}],callback);
	}
};

module.exports=user;