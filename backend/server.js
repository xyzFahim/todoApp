require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db')
const app = express();

// Parse requests
app.use(bodyParser.json());

//Routing Request
app.use('/tasks' , require(("./Routes/Api/task")))

//MongoDB connection
connectDB();

//checking connection
app.get('/', (req, res) => { 
    res.json({message : 'Welcome to the Todo Application'});
});


// logs the server running message with the port number
const port = 7000
app.listen (port , () => { 
    console.log(`Server running on port ${port}`);
});