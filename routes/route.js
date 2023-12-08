// This line declares a constant variable named `express`. The `const` keyword is used to create a variable that cannot be reassigned.
// require` is a function used to include external modules or files in your application.
const express = require('express');

const router = express.Router()

module.exports = router;

// Post Method
// This line sets up a route handler for HTTP POST requests at the '/post' endpoint. It's using the `post` method of the `router` object, indicating that this route will handle POST requests specifically.
// (req,res)=These parameters represent the incoming request and the server's response, respectively.
//  'Post API' as the response to the client. In Express, the `send` method is used to send a response to the client.
router.post('/post', (req, res) => {
    res.send('Post API')
})

// router post=a route handler for HTTP POST requests at the '/post' endpoint. 
// method of the router object, indicating that this route will handle POST requests specifically.
// async =allows the use of await inside the function
//  const data=It extracts the values for 'name' and 'age' from the request body (req.body) and creates a new document.
// try= handling potential errors that may occur during the execution of the following code.
// const dataToSave = await data.save=This line saves the newly created document (data) to the MongoDB database. 
// res.status(200).json(dataToSave)=If the document is successfully saved, this line sends a JSON response to the client with a status code of 200 (OK) and the saved data.
//  In case of an error, this line sends a JSON response to the client with a status code of 400 (Bad Request) and an error message.
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
// //Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send('Get by ID API')
// })

// //Update by ID Method
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

//Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })

// const Model = require('../models/models')=mports the Mongoose model named Model from the '../models/models' file.
// router.get('/getAll= line sets up a route handler for HTTP GET requests at the '/getAll' endpoint. 
// const data = await Model.find();: This line uses the find method of the Mongoose model (Model) to retrieve all documents from the associated MongoDB collection
// res.json(data);: If the documents are successfully retrieved, this line sends a JSON response to the client with the retrieved data.
// res.status(500).json({ message: error.message });: In case of an error, this line sends a JSON response to the client with a status code of 500 (Internal Server Error) and an error message.
const Model = require('../models/models');
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by ID Methodrouter.get('/getOne/:id', ...): This line sets up a route handler for HTTP GET requests at the '/getOne/:id' endpoint. It's using the get method of the router object, indicating that this route will handle GET requests specifically
// const data = await Model.findById(req.params.id);: This line uses the findById method of the Mongoose model (Model) to retrieve a document by its unique identifier (id). The await keyword is used because the findById operation is asynchronous
// res.json(data);: If the document is successfully retrieved, this line sends a JSON response to the client with the retrieved data.
// es.status(500).json({ message: error.message });: In case of an error, this line sends a JSON response to the client with a status code of 500 (Internal Server Error) and an error message.
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// 
//Delete by ID Method
// router.delete('/delete/:id', ...): This line sets up a route handler for HTTP DELETE requests at the '/delete/:id' endpoint. It's using the delete method of the router
// res.send(Document with ${data.name} has been deleted..);: If the document is successfully deleted, this line sends a simple text response to the client, indicating which document has been deleted.
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})