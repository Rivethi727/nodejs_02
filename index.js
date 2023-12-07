// require=dotenv library into your js code ,require =important modules,dotenv=is the modules that helps you load environment modules
// config=this method  is called on the importanted dotenv module
require('dotenv').config();
// 

// require('express')=important the express modules
// The express module contains all the functionality and features of the Express web framework.
// const express=declares a constant variable ,assigns the imported 'express' module to it.

// mongoose=mongodb odm ()to translate the code and its representation from MongoDB to the Node. js server
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
const routes = require('./routes/route');


app.use('/api', routes)