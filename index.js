// require=dotenv library into your js code ,require =important modules,dotenv=is the modules that helps you load environment modules
// config=this method  is called on the importanted dotenv module
require('dotenv').config();
// 

// require('express')=important the express modules
// The express module contains all the functionality and features of the Express web framework.
// const express=declares a constant variable ,assigns the imported 'express' module to it.

// mongoose=mongodb odm ()to translate the code and its representation from MongoDB to the Node. js server
// process.env: This is an object in Node.js that contains the user environment. It allows you to access environment variables.
// const mongoString = This part declares a constant variable named
// mongoString and assigns the value of the DATABASE_URL environment variable 
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

//mongoose.connect(mongoString)=connection to a MongoDB database using Mongoose. 
// const database = mongoose.connection= constant variable named database and assigns the mongoose.connection
// mongoose.connection= object represents the connection to the MongoDB database. 
// connect to a MongoDB database using Mongoose, create a database object to represent the connection, and set up an error handler to log any connection errors to the console.
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

// database object and logs a message to the console when the MongoDB database connection is successfully established.
database.once('connected', () => {
    console.log('Database Connected');
})

// Express web application and assigns it to the constant variable `app.
// build and configure your web server using the features provided by the Express framework.
const app = express();

// express.json()=This part is a middleware provided by the Express framework
// app.use=This line is using the `use` method of the Express application (`app`). ,The `use` method is used to mount middleware functions in the request-response cycle.
app.use(express.json());

// app.listen(3000)=This line tells your Express application (app) to start listening for incoming HTTP requests on port 3000. 
// console.log(Server Started at ${3000}=Inside the callback function, this line logs a message to the console, indicating that the server has started and is listening on port 3000.
// listen = method takes two arguments: the port number (in this case, 3000) and a callback function.
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
const routes = require('./routes/route');
// require('./routes/route')=This part uses the `require` function to import the module located at the specified file path.
// routes`= variable contains whatever functionality or data is exported from the `route` module.

app.use('/api', routes)
// This line uses the `use` method of your Express application (`app`).
// The `use` method is used to apply middleware to your application. 
// Middleware functions are functions that have access to the request, response, and the next function in the application's request-response cycle.
// api=This is the path at which the middleware will be mounted
// routes` is likely a set of route handlers or additional middleware that handles requests under the `/api` path.