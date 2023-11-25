import mongoose from "mongoose";

// creating a taskschema for storing the data

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  hr: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
  },
});

export default mongoose.model("Task", taskSchema);
