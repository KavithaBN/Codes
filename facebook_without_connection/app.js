
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , index = require('./routes/index')
  , signup = require('./routes/signUp')
  , about = require('./routes/about')
    , interest = require('./routes/interest')
     , friends = require('./routes/friends')
      , groups = require('./routes/groups')
      , membergroups = require('./routes/membergroups')
  , userDetails = require('./routes/userDetails');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT ||3045);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/signup', signup.signUp);
app.post('/usersignup', signup.userSignUp);
app.get('/usersignup', signup.userSignUp);
app.get('/checkuser',routes.chkUser);
app.post('/checkuser',routes.chkUser);
app.get('/about',about.about);
app.post('/about',about.about1);
app.get('/interest',interest.interest);
app.post('/interest',interest.interest);

app.get('/userdetails',userDetails.getnewsfeed);
app.post('/userdetails',userDetails.postnewsfeed);

app.get('/friends',friends.friends);
app.post('/friends',friends.friends1);

app.get('/groups',groups.groups);
app.post('/groups',groups.groups);

app.get('/membergroups',membergroups.membergroups);
app.post('/membergroups',membergroups.membergroups);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
