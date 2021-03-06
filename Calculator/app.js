var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , index = require('./routes/index')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.post('/calculator', index.result);




if ('development' === app.get('env')) {
	  app.use(express.errorHandler());
	}

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err); 
});


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});