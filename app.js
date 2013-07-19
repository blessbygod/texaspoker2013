
/**
 * Module dependencies.
 */

var express = require('express'),
    main = require('./routes/main'),
    http = require('http'),
    path = require('path'),
    child = require('child_process');
var app = express();

app.configure(function(){
  var public_dir = path.join(__dirname, 'public'),
      static_dir = express.static( public_dir );
  app.set('port', process.env.PORT || 8080);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(static_dir);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/*
 * url routes list
 * */
app.get('/', main.info);
app.get('/table', main.table);
app.get('/filter', main.filter);
app.get('/log', main.log);
app.get('/config', main.config);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/*
 * listening on css file modified by sass
 * */
child.exec('sass --watch public/stylesheets/');



