//initialise mongoose module
const mongoose = require("mongoose");

//create a mongoose schema
const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        require: true
    }
}, {timestamps: true});

//export the schema
//schema is structure of the data and model is the actual data
module.exports = mongoose.model("Workout", workoutSchema);
