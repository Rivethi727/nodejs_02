// mongoose'= module is a library that simplifies interactions with MongoDB, a NoSQL database.
// require=require` function in Node.js to import the 'mongoose' module.
const mongoose = require('mongoose');


// schema=It will be used to define the structure (schema) of documents that will be stored in MongoDB.
// new mongoose.Schema= This part creates a new instance of the Mongoose `Schema` class. 
// Schema` class is used to define the blueprint for the structure of documents in a MongoDB collection.
// name= It specifies that the `name` property is of type `String` and is, required = it must be present in every document).
// meaning every document created based on this schema must include both a `name` and an `age`. This schema is a way to structure and validate data before saving it to a MongoDB collection.
const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

// module.exports=This is a special object in Node.js
// ThisdataSchema). The model method of the mongoose object is used to create a model. 
module.exports = mongoose.model('Data', dataSchema)