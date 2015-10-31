
/*
 * GET home page.
 */

var mysql = require("./mySql");
var connection = require("./connection");
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

	 
exports.chkUser = function (req,res){

	var email=req.param("email1");
	var pwd=req.param("pwd1");
	var query="select * from users where emailId='"+email+"' and pwd = '" +pwd +"'";

var dbConn = mysql.getDBConn();
	if(dbConn === "empty"){
		connection.waitConnPool({name:"index", request: req, response: res});
	} else {

	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0) {
				console.log(results[0].emailId);
				req.session.email = results[0].email;
				res.send({"userDetails":"Success","userEmail":results[0].email});
			}
			else {    
				console.log("Invalid Login");
				res.send({"index":"Please enter a valid email and password"});
		}  }
	},query);
}};


exports.signout = function(req, res){
req.session.destroy();
  res.render('index');
};
