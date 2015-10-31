var mysql = require("./mySql");

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
		
		//var query="insert into users (fname,lname,email,password) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
		console.log(email);
		var query="insert into userinfo (fname,lname,email,pwd) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
		//var query = "select * from demotab where email = '"+email+"' ";
		console.log(email);
		//console.log(query1);
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{				
				if(results.length === 0)
					{
					console.log("inside condition");
					
					res.render('index',{fname: fnm});
					}
				else
					{
					res.send({signUp:"Email Id already exists !!"});
					res.render('index');
					}
						
						}  
		},query);
};

