# Getting started with Express.js

The notes here and code samples in this directory were made while following along with a Node.js lesson series from (Egghead.io)[https://egghead.io/series/getting-started-with-express-js].

### General Insights & Lingering Questions

Q's

- When should you use `scripts` in `package.json` instead of `gulp` or `grunt`?
	1. When `gulp` or `grunt` aren't being used as build tools.
	2.



### Up and Running

Tasks:

1. `npm init -y` - initialized node app; `-y` to use only defaults
2. `npm i -S express` - installed express module using alias `i`, `-S` so package appears in dependencies
3. Created `index.js` file which required express, called an express `get` function to return "Hello world!" to the `/` route and logged to the console when the express server (express `listen` function) was started
4. Added `start` line to `package.json` under `scripts`, so that the script `node index.js` runs with `npm start`
5. `npm -i -D nodemon` - installed nodemon module, `-D` so that package appears in devDependencies
6. Added `dev` line to `package.json` under `scripts`, so that the script `"nodemon index.js"` runs with `npm run dev` (`run` being an alias of `run-script`)
7. Added another `get` request to index.js to return "Yo!" to the `/yo` route

Remember:

- Lots of pleasant documentation on NPM's cli and more at https://docs.npmjs.com
- Great examples here for configuring `package.json`, like `scripts`!


### Routing Basics

Tasks:

- Read in a JSON file using `fs` module (https://nodejs.org/api/fs.html) which is part of node
- Parse a JSON file using `lodash` module (https://www.npmjs.com/package/lodash)
- Use a forEach loop to populate an empty array var with data from each line of the JSON file
- Use `JSON.stringify()` to make a new json object var from the array, and send that json object var with the response
- Create a dynamic route for users by `/:username`
- Create a dynamic route using a regex
- Reorder routes so all dynamic routes can run before the response is returned

Remember:

- `/:username` treats that part of the route as a general parameter; the request object has a parameter `params` to refer to a corresponding route parameter, e.g. `req.params.username`
- a regex (e.g. `/big.*/`) can be used to trigger a dynamic route handler
- Order of routes matters! Once the response is sent, you can't run another route handler (in the case of a route that triggers multiple route handlers)
- `next()` triggers the next route handler


### Template Engines

Tasks:

- Use express's support for templates engines

	1. Add `jade`, `handlebars`, and `consolidate` modules to project
	2. Require `consolidate` to use handlebars with express
	3. Set `views` to `/views/` dir
	4. Set template engine to either `jade` or `hbs` (handlebars)
	5. `res.render('index', {users: users})` to render template in route handler, where users are populated on the selected template

Remember:

- Jade has built-in support for express, mounds don't!

### Static Files

Tasks:

- Serve user image in templates

0. Add images folder to repo
1. `app.use(express.static('images'))` to serve static images from a directory called `images`
2. `app.use('/profilepics', express.static('images'))` to serve static images from a directory called `profilepics/images`
3. Update `index.hbs` template accordingly
4. Create non-list version of `index.hbs` called `user.hbs` that shows username, picture for a single user

### HTTP Verbs

Tasks:

- Lots of code updates
- `edit()`, `save()` and `del()` links added which call ajax functions
- `edit()` makes inputs tagged with `.edit` editable
- `save()` calls a `PUT` method to update data and reload page
- `del()` calls a `DELETE` method
- `body-parser` module used

### Advanced Routing

Tasks:

- `verifyUser` function demonstrates using `next()` to move to another route if a route parameter condition isn't met
- `/:foo` route example demonstrates a default response return

Remember:

- `res.redirect(...)` redirects user to another route
- `res.status(404).send(...)` chains the status function and send functions to send a http 404 status and corresponding message
- `res.download(...)` triggers a download
- Try `res.json(...)` in an API server!
- `app.all(...)` method can apply to all cases of a given route, which can be useful for data collection, etc.

### Routing Code Organization



### Using Streams



### Middleware



### MongoDB Integration



### Using virtual properties with Mongoose and MongoDB













***
