//Imports
require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const users = require('./routes/users')
const private = require('./routes/private');
const app = express();
const errorHandler = require('./middleware/error')

//Middleware
app.use(express.json());

//Routes
app.use('/api/v1/users', users);
app.use('/api/v1/private', private);

//Error Handler 

app.use(errorHandler);

//Start
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();
