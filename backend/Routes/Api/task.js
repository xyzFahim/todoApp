const express = require("express");
const router = express.Router();
const Task = require('../../Model/task')

//Create a new task
router.post("/", async (req, res) => {  
    const taskObj = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
    }
    const task = new Task(taskObj);
    await task.save();
    res.status(201).json(task);
});



module.exports = router;

