var mysql = require("./mySql");

exports.interest = function(req, res){
	  res.render('interest');
	};


exports.interest1 = function(req,res){
	console.log("inside interest");
		//var userid = req.param("userid");
		var music=req.param("music");
		var shows=req.param("shows");
		var sports=req.param("sports");
		var movies=req.param("movies");
				
		//console.log(current_city);
		
		var query = "insert into interest (user_id_interest,music,shows,sports,movies) values (6,'"+music+"', '"+shows+"', '"+sports+"', '"+movies+"')";
		//console.log(query1);
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{					
				
					res.render('userDetais');
			}						 
		},query);

};

