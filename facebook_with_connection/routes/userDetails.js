var mysql = require("./mySql");

exports.userDetails = function(req, res){
	  res.render('userDetails');
	};
	exports.userDetails = function(req,res){
		console.log("inside signup");
			var email=req.param("email");
			var pwd=req.param("pass");
			var fnm = req.param("fname");
			var lnm = req.param("lname");
			console.log(lnm);
			//var query="insert into users (fname,lname,email,password) values ('"+fnm+"', '"+lnm+"' , '"+email+"', '"+pwd+"')";
		mysql.fetchData(function(err,results){
				if(err){
					throw err;
				}
				else 
				{
						res.render('index',{fname: fnm});
				}  
			});
	};

	exports.getnewsfeed = function(req,res){
		var email=req.param("email");
		var query = "select userinfo.fname, news_feed.user_music,news_feed.user_city  from userinfo join news_feed on userinfo.user_id= news_feed.user_id_feed where news_feed.user_id_feed in(select friend_one,friend_two from friend where requeststatus ="+" '"+");";
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
					res.render('userDetails');
			}  
		},query);
	};
	
	
	exports.postnewsfeed = function(req,res){
		var email=req.param("email");
		var newsFeedReq = "insert into news_feed(news_feed_id,user_city, user_music) values(1," + "'" + user_city+ "'" + "," + "'" + user_music + "'" + ");";
		mysql.fetchData(function(err,result){
			if(err){
				res.send(err);
			}
			else{
				res.render('userDetails');
				console.log(result);
			}
		},newsFeedReq);
		
	};