const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
			required: true,
		},
		status: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Task = mongoose.model("Task", TaskSchema);