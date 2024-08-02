import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

	content: {
		type: String,
		required: true,
	},
	complete: {
		type: Boolean,
		default: false,
	},


	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},

	subtodo: {
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Subtodo"
			}
		], //array of subtodos

	}


}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)

