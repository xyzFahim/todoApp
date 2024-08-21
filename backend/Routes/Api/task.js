const express = require("express");
const router = express.Router();
const Task = require("../../Model/task");

//Create a new task
router.post("/", async (req, res) => {
	const taskObj = {
		title: req.body.title,
		description: req.body.description,
		status: req.body.status,
	};
	const task = new Task(taskObj);
	await task.save();
	res.status(201).json(task);
});

//Get all tasks
router.get("/", async (req, res) => {
   try {
     const tasks = await Task.find();
     res.json(tasks);
   } catch (error) {
    res.status(500).send("Something Went Wrong");
   }
})

//Get Task by Id


module.exports = router;