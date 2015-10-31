var mysql = require("./mySql");

exports.about = function(req, res){
	  res.render('about');
	};


exports.about1 = function(req,res){
	console.log("inside about");
		//var userid = req.param("userid");
		var city=req.param("city");
		var sex=req.param("sex");
		var company=req.param("company");
		var education=req.param("education");
		var phoneno=req.param("phoneno");
		var life_event=req.param("lifeevent");
		var life_event_date_=req.param("ledate");
		
		
		console.log(city);
		
		var query = "insert into userinfo (user_id,city,sex,company,education,phoneno,life_event,life_event_date_) values (1,'"+city+"', '"+sex+"', '"+company+"', '"+education+"', '"+phoneno+"', '"+life_event+"', '"+life_event_date_+"')";
		//console.log(query1);
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{			
				if(results.length === 0)
				{
				res.render('about');
			    }
				else
			    {
				res.send({about:"Details already updated !!"});
				res.render('userDetails');
				}
			}
		},query);

};

exports.signout = function (req,res){
	req.session.destroy();
	 res.render("index");
				};
