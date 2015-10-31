var mysql = require("./mySql");

exports.groups = function(req, res){
	  res.render('groups');
	};


	exports.createGroup1 = function(req, res){
		  console.log("inside interest");
				
				var email = req.session.email;
				var user_id = req.param("user_id");
				var group_name=req.param("group_name");
				var group_desc=req.param("group_desc");
				var query = "(insert into user_grp(group_name,group_desc,group_admin) values('group_name','group_desc','"+user_id+"')";
		

		
				//console.log(query1);
				mysql.fetchData(function(err,results){	
					if(err){
						throw err;
					}
					else 
					{					
						req.session.email = results[0].email;
							res.render({"userDetails":"Success","userEmail":results[0].email,"userid":results[1].userid});
					}						 
				},query);

		};

		
