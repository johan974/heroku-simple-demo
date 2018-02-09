var express = require('express');
var app = express();

// enable ssl redirect
// app.use(sslRedirect());

// app.get('/', function(req, res){
//
// // serve
// http.createServer( function ( request, response ) {
//     request.addListener( 'end', function () {
//         file.serve( request, response );
//     } ).resume();
// } ).listen( port );

app.use(express.static( __dirname + '/public'));
var port = process.env.PORT || 8000;
app.listen(port);
