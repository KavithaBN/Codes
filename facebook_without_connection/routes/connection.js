var mysql = require('mysql');
var queue = require('queue');
var conPool = require('./enableConnectionPooling');

var connPool = new queue();
var waitQueue = new queue();

function dbConnect()
{
	var dbCon = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database: 'fbdb'
	});
//	if(dbCon === undefined)
//		throw
	dbCon.connect();
	return dbCon;
}

function addConnection(dbCon)
{
	if(connPool !== null)
	{
		connPool.push(dbCon);
	}
}

function getConnection()
{
	if(connPool.length >= 1)
	{
		var dbConn = connPool.pop();
		return dbConn;
	}
}

function initializeConnPool(poolSize)
{
	if(connPool !== null)
	{
		connPool.start();
		for(var cnt = 0; cnt < poolSize; cnt++)
		{
			addConnection(dbConnect());
		}
	}
	if(waitQueue !== null)
	{
		waitQueue.start();
	}
}


function getPoolSize()
{
	if(connPool !== null)
	{
		return connPool.length;
	}
}

function waitConnPool(userRequest)
{
	// if connection pooling is not enabled return.
	if(conPool.isConnPool === false)
	{
		return;
	}
	if(connPool !== null){
		if(connPool.length <= 0){
			//add user request to wait queue here
			if(userRequest !== null)
			{
				waitQueue.push(userRequest);
			}
		}
		else{
			//process request from wait queue here
			if(waitQueue.length <= 0)
			{
				return;
			}
			waitQueue.reverse();
			var userReq = waitQueue.pop();
			waitQueue.reverse();
			console.log("got user request " + userReq.email);
			
				
				if(userReq.name==="signUp"){
					signUp.signUp(userReq.request, userReq.response);
					}
				if(userReq.name==="userSignUp"){
					signUp.userSignUp(userReq.request, userReq.response);
					}
				if(userReq.name==="about1"){
					about.about1(userReq.request, userReq.response);
					}
				if(userReq.name==="interest1"){
					interest.interest1(userReq.request, userReq.response);
					}
				if(userReq.name==="createGroup1"){
					createGroup1.createGroup1(userReq.request, userReq.response);
					}
				if(userReq.name==="userDetails1"){
					userDetails.userDetails1(userReq.request, userReq.response);
					}
				
				if(userReq.name==="signout"){
					index.signout(userReq.request, userReq.response);
					}
				
				if(userReq.name==="getfriends"){
					friendsList.getfriends(userReq.request, userReq.response);
					}
				
					
				
				
			}
		}
	}

function terminateConnPool()
{
	if(connPool !== null)
	{
		connPool.stop();
	}
	if(waitQueue !== null)
	{
		waitQueue.stop();
	}
}

function getDBConn()
{
	var dbConn;
	if(conPool.isConnPool === true)
	{
		if(getPoolSize() <= 0)
		{
			dbConn = "empty";
		}
		else{
			dbConn = getConnection();
		}
	}
	else
	{
		dbConn = dbConnect();
	}
    return dbConn;
}

function returnDBconn(dbConn)
{
	console.log(conPool.isConnPool);
	if(conPool.isConnPool === true)
	{
		console.log("returning connection");
		addConnection(dbConn);
	}
	else
	{
		dbConn.end();
	}
}


exports.initializeConnPool = initializeConnPool;
exports.getDBConn = getDBConn;
exports.returnDBconn = returnDBconn;
exports.waitConnPool = waitConnPool;
