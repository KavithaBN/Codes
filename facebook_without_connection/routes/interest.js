var mysql = require("./mySql");
var connection = require("./connection");
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
						
							res.render({"userDetails":"Success","userEmail":results[0].email});
					}						 
				},query);

				}};