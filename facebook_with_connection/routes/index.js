
/*
 * GET home page.
 */

var mysql = require("./mySql");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

	 
exports.chkUser = function(req,res){
		var email=req.param("email");
		var pwd=req.param("pwd");
		var query="select * from userinfo where email='"+email+"' and pwd = '"+pwd+"'";

		
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				if(results.length > 0) {
					console.log(results[0].email);
					var fn = results[0].fname;
					res.render('userDetails',{fname: fn});
				}
				else {    
					console.log("Invalid Login");
				    res.render('signUp');
				}
			}  
		},query);
};

	
	