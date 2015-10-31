var mysql = require("./mySql");

exports.friends = function(req, res){
	  res.render('friends');
	};


	exports.friendList = function(req,res){
		console.log("inside friend list");
			var user_id = req.param("user_id");
			var fname=req.param("fname");
			
			var email = req.session.email;

			
			console.log("");
			var query = "(SELECT user_id, fname from userinfo where fname like "%'+req.query.key+'%"')";
			
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
				{		req.session.email = results[0].email;		
					res.render('index');
						}
			
							 
			},query);

	};