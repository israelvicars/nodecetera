// require the node.js net module
var net = require('net');

// create the server
var server = net.createServer(function(c){
  // fire a console message when a client connects
  console.log('client connected');
  // listen for the data event

  c.on('data', function(d){
    // print the data received out to the console
    console.log('data received: ' + d.toString());
  });

  // listen for the end event
  c.on('end', function(){
    // print a message stating the client disconnected
    console.log('client disconnected');
  });
});

// setup the server to listen on your required port/address
server.listen(3000, function(){
  // print out a message indicating the server has started
  console.log('server started');
});

// optionally, include a specific IP address
// server.listen(3000, '192.168.1.1', function(){
//   console.log('server started');
// });
