var restify = require( 'restify' );
var server = restify.createServer();

server.get( '/', hello );
function hello( req, res, next ) {
	res.setHeader( 'content-type', 'text/plain' );
	res.send( 'Hello World!' );
}

server.listen( 80, function() {
	console.log( '%s listening at %s', server.name, server.url );
} );