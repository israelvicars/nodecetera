# Getting started with Express.js

The notes here and code samples in this directory were made while following along with a Node.js lesson series from (Egghead.io)[https://egghead.io/series/getting-started-with-express-js].

### General Insights



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

-

### Routing Basics



### Template Engines



### Static Files



### HTTP Verbs



### Advanced Routing



### Routing Code Organization



### Using Streams



### Middleware



### MongoDB Integration



### Using virtual properties with Mongoose and MongoDB













***
