// var express = require('express');
// var app = express();

// // CALLBACK FUNCTION
// //response object and send you a message
// app.get('/', function(req,res){
// 	res.send('Hello World!');
// });

// app.listen(3300);


//--------------------------------------------------------
// var express = require('express');
// var app = express();

// app.set('port', process.env.PORT || 3000);

// app.get('/',function(req,res){
// 	res.send('Hello World!');
// });

// app.listen(app.get('port'), function(){
// 	console.log('Express started on http://localhost:' + app.get('port'));
// });

////----------------------------------------------------------------------

var http = require('http');
var express = require('express');

var app = express();

app.use(function(req, res, next){
  console.log('Request from ' + req.ip);
  next();
});

app.get('/',function(req,res){
	res.send('Hello World!');
});

app.get('/about', function(req, res){
	console.log('about');
	res.send('About Us!');
});

app.get('/about/directions', function(req, res){
	res.send('How to Find Us!');
});


app.use(function(req, res){
	res.type('text/plan');
	res.status(404);
	res.send('Your page was not found!');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plan');
	res.status(500);
	res.send('500 Sever Error/ App Crash Error ');
});

http.createServer(app).listen(3000, function(){
	console.log('Express server listening on port ' + 3000);
})
