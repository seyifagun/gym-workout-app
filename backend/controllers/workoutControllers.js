const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//get ALL workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts);
}

//get SINGLE workouts
const getworkouts = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }
    const workouts = await Workout.findById(id);

    if(!workouts){
        //we return because we don't want to run the rest of the code if the workout is not found
        return res.status(404).json({error: "No such workout"});
    }
    res.status(200).json(workouts);
}

//POST a new workout
const postWorkout = async (req, res) => {
    //destructure the payload to be sent to the POST endpoint...
    const {title, load, reps} = req.body;
 
    try{
        const workout = await Workout.create({title, load, reps});
        //receive a response to know if the POST was successful
        res.status(200).json(workout);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    //to grab an id from the req.params
    const {id} = req.params;
    //check if id exists
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }
    const workouts = await Workout.findOneAndDelete({_id: id});

    if(!workouts){
        //we return because we don't want to run the rest of the code if the workout is not found
        return res.status(404).json({error: "No such workout"});
    }
    res.status(200).json(workouts);
}
//update a workout
const updateWorkout = async (req, res) => {
    //grab an id to updated
    const {id} = req.params;
    //check if id exists
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }
    const workouts = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!workouts){
        //we return because we don't want to run the rest of the code if the workout is not found
        return res.status(404).json({error: "No such workout"});
    }
    res.status(200).json(workouts);
}

module.exports = {
    postWorkout,
    getworkouts,
    deleteWorkout,
    updateWorkout,
    getAllWorkouts
}