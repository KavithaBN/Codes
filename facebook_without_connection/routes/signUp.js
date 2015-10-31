var mysql = require("./mySql");
var connection = require("./connection");
exports.signUp = function(req, res){
	  res.render('signUp');
	};


exports.userSignUp = function(req,res){
	console.log("inside signup");
		var email=req.param("email");
		var pwd=req.param("pwd");
		var fnm = req.param("fname");
		var lnm = req.param("lname");
		console.log(lnm);
		
		var query="select * from demotab where email='"+email+"'";
		var dbConn = mysql.getDBConn();
				if(dbConn === "empty"){
					connection.waitConnPool({name:"index", request: req, response: res});
				} else {


			mysql.fetchData(function(err,results){
				if(err){ throw err; }
				else {
					if(results.length === 0) {
						var query="insert into userinfo (fname,lname,email,pwd) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
						mysql.fetchData(function(err,results){
							if(err){ throw err; }
							else {
								res.send({"index":"Success"});
							}  
						},query);
					}
					else {    
						res.send({"signUp":"Email id is already in use. Please login or sign up with other email id"});
					}}
				
			},query);
		}};
