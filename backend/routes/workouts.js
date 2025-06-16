const express = require('express');

const {
    postWorkout,
    getworkouts,
    deleteWorkout,
    updateWorkout,
    getAllWorkouts
} = require("../controllers/workoutControllers");

const router = express.Router();

//Get ALL workouts
router.get('/', getAllWorkouts);

//GET single workout
router.get('/:id', getworkouts);

//POST a new workout
router.post("/", postWorkout);

//DELETE single workout
router.delete('/:id', deleteWorkout);

//UPDATE a single workout
router.patch("/:id", updateWorkout);

//export router
module.exports = router;