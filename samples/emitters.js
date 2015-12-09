// functions used as listeners by the events:
var sayHello = function() { console.log('Hello to you!') }
var sayGoodbye = function() { console.log('Goodbye then!') }

// creating the EventEmitter:
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
// create the hello event listener:
emitter.on('hello', sayHello);
// create the goodbye event listener:
emitter.on('goodbye', sayGoodbye);

// emit the hello event:
emitter.emit('hello');
// emit the goodby event:
emitter.emit('goodbye');

// view the events stored in the global emitter object:
global.emitter._events
// write the event listeners to a string:
global.emitter._events.hello.toString();

// remove the sayHello listener on the 'hello' event:
emitter.removeListener('hello', sayHello);
// remove all listeners on the 'hello' event:
emitter.removeAllListeners('hello');

// change the MaxListeners alert value:
emitter.setMaxListeners(0);

// a basic http server using the http module:
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
    res.writeHead(200, "Content-Type": "text/plain"});
    res.end("This is our response!");
})
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
