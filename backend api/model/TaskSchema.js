import mongoose from "mongoose";

// creating a taskschema for storing the data

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  hour: {
    type: Number,
  },

  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Task", taskSchema);
