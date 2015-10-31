var mysql = require("./mySql");
var connection = require("./connection");
exports.groups = function(req, res){
	  res.render('groups');
	};


	exports.createGroup1 = function(req, res){
		  console.log("inside interest");
				
				var email = req.session.email;
				var userid = req.session.userid;

				var group_name=req.param("group_name");
				var group_desc=req.param("group_desc");
				
				
				
		var query = "insert into user_grp(group_name,group_desc,group_admin) values('group_name','group_desc','"+user_id+"')";
		
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
						
							res.render({"userDetails":"Success","userEmail":results[0].email,"userid":results[1].userid});
					}						 
				},query);

		}};

