require('dotenv').config();

//initiate express module
const express = require('express');

//instantiate the mongoose module
const mongoose = require('mongoose');

//express app
const app = express();

//intiate routes module
const workoutRoutes = require("./routes/workouts");

//connect to db
mongoose.connect(process.env.MONGODB)
    //we only listen to the backend request once connected to backend
    .then(app.listen(process.env.PORT, () => {
        console.log('Connected to MongoDB and listening on port 4114...');
    }))
    .catch((error) => {
        console.log(error);
   });

//middleware
app.use(express.json()); //any request that comes in, it checks if it has a body

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('Server is running on port 4114...');
// })
