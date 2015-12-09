# Introduction to Node: The Fundamentals

From (Egghead.io)[https://egghead.io/series/introduction-to-node-the-fundamentals]

## "Global" Insights

`node` is an event loop processor. It runs through in a loop looking for events that it can execute.


## Mysteries of Context

1. "JavaScript cannot handle octet data..." (Buffers)

### node repl

Initialize with `node`

Remember:

* `.exit` - to exit node repl
* `.help` - to see available commands
* `.save [filename.js]` - to save current session
* `.load [filename.js]` - to load a saved session
* `.break` or `.clear` - "sometimes you get stuck, this gets you out"
* `_` - refers to result of previous statement


### Callbacks

Gist: _reusable functions that take other functions as parameters and execute those functions_

Defined: `A callback function, also known as a _higher-order function_, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. A callback function is essentially a pattern (an established solution to a common problem), and therefore, the use of a callback function is also known as a callback pattern.`


### Global Process Object

Gist: _`global` is a JS object that lists details about the environment and process, and it also contains functions available to all node modules_

Defined: _Each Node.js process has a set of built-in functionality, accessible through the global process module. The process module doesn't need to be required - it is somewhat literally a wrapper around the currently executing process, and many of the methods it exposes are actually wrappers around calls into some of Node's core C libraries._

Remember:

- `process.stdout.write("...")` is node's equivalent for console.log
- `process.nextTick(cb)` waits until next "loop" to run callback, similar to a zero-length setTimeout


### Global Namespace

_global variables_ aka _globals_

Remember:

- `- global` see all global objects
- vars created in node repl are added to the global object associated with that process
-


### Buffers

Gist: _Buffers convert and store external data in a usable format_

Defined: _Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap._

Remember:
- fs.readFile(file location, optional char set, cb(err, data)) - Create buffer (data) from octet file
- buffer.write(text, optional offset int, optional length int) - add text to a buffer object
- buffer.toString() - call/show/get string version of buffer
- Buffers can't be resized
- buffer1.compare(buffer2) - Test equality of buffers (0: true, 1: false)
- buffer1.equals(buffer2) - Test equality of buffers (true, false)
- arrayOfBuffers.sort(Buffer.compare) to sort buffers by size/length
- buffer.slice(offset, length) - creates memory reference (pointer) to source buffer

### Modules

Gist: use other people's code, make your code more usable

Defined:

Remember:
- `require('...')` - Require a node module, usually assigned to a variable; module can be from an explicit path to a module, a globally available module, a local `node_modules` directory, or else `require` will traverse up the project directory looking for `node_modules` directories containing the specified module; `require` looks for files with .js, .json, and .node (compiled modules) extensions
- `npm install` - command to install modules

### Exporting Modules

Two ways to export a module:
(1) Export individual functions
(2) Export the entire file

Individual functions can be exported:
```
exports.area = function(r){
  return PI * r * r;
}
```

The whole module can be exported:
```
module.exports = function(r){
  return {
    area: function(){
      return PI * r * r;
    }
  }
}
```

Remember:

- Module.exports can return any valid JSON script object (a string, a Boolean, a number, a date, etc.)
- Functions can only be attached to module.exports if it doesn't have "something attached to it already"
- RULE OF THUMB: Use the exports statement to export instances of modules (to reference it's properties, functions). Use the module.exports statement to export JavaScript objects (i.e. the module is actually a Class)


### Node Packages and NPM

[NPMJS](https://www.npmjs.com)

NPM - the Node Package Manger

- `npm install` - install local to a project
- `npm install -g` - if you use it from the command line, e.g. gulp, mocha, grunt
- `package.json` - lists dependencies (modules with versions) and node project info
- `^` as in `^2.3.4` - wildcard on minor version level (e.g. 2.2.2, 2.1.5, 2.5.6, etc.)
- `~` as in `~2.3.4` - wildcard on patch level (e.g. 2.3.1, 2.3.2, 2.3.5, etc.)
- `*` - install latest version (use rarely)
- `git://github.com/...` or `https://github...` - link to specific version

### Create a tcp server with the Node.js net module

Run `node samples/tcpServer.js` to start server, and access server using `telnet localhost 3000` in another terminal tab. Sending text from telnet and closing connection trigger corresponding server events.

### Creating a Node.js module

Example steps

1. `npm init` to create package.json (if not done already)
2. write module (see exampleModule.js in samples dir)
3. require module

Missing steps

0. Put it in a git repo
1. Include tests and demonstrate tests code coverage
2. README file
3. Publish

### Using the node.js http server

Run `node samples/server.js` to start server, and access server using a web browser pointed to http://localhost:3000. For [url + "/"](http://localhost:3000/) and [url + "goodbye"](http://localhost:3000/goodbye), the responses are defined as "Hello World" and "Goodbye World", respectively. Using a REST client to send a POST request will elicit the serve to return a response of Posting goodbye cruel world!"

### Publishing a Module to the NPM Registry

NPM Publishing Tasks

* create a user account on the npm registry
	* `npm addUser` to login to the npm registry from the command line
* publish your module to the registry
	* `npm publish` to publish to registry
	* Packages must have a name and version number
* use npm version to bump the version number of your package
	* `npm version patch`
* publish updated versions of your module to the registry
	* `npm publish`
* unpublish modules from the registry
	* `npm unpublish [module name] [--force if whole project, not a specific version]`


### Using EventEmitters in Node.js

Remember:

- `events` module is global
- 10+ events associated with a listener triggers a warning from Node; override with emitter.setMaxListeners(); setting to '0' means unlimited listeners
- a `server` using the `http` module is an event emitter object

























***
