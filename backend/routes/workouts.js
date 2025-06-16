const express = require('express');

const router = express.Router();

//Get ALL workouts
router.get('/', (req, res) => {
    res.json({mssg: "Get ALL workouts!"})
});

//GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: "Get single workout!"})
});

//POST a new workout
router.post("/", (req, res) => {
    res.json({mssg: "Post a single workout!"})
});
//DELETE single workout
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a single workouts!"})
});

//UPDATE a single workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "UPDATE a single workout!"})
});

//export router
module.exports = router;