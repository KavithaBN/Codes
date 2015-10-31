var mysql = require("./mySql");

var connection = require("./connection");

exports.friends = function(req, res){
	  res.render('friends');
	};


	exports.friendList = function(req,res){
		console.log("inside friend list");
			var user_id = req.param("user_id");
			var fname=req.param("fname");
			
			var email = req.session.email;

			
			console.log("");
			var dbConn = mysql.getDBConn();
					if(dbConn === "empty"){
						connection.waitConnPool({name:"index", request: req, response: res});
					} else {

					var query = "(SELECT userid, fname from demotab where fname like "%'+frnds+'%"')";
						if (err) throw err;
						var data=[];
						for(i=0;i<rows.length;i++)
						{
						data.push(rows[i].fname);
						}
						res.end(JSON.stringify(data));
						
						
					mysql.fetchData(function(err,results){
						if(err){
							throw err;
						}
						else 
						{				
							
							
								res.render('index');
								}
					
									 
					},query);

			}};