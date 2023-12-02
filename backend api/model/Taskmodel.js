import mongoose from "mongoose";
import taskSchema from "./TaskSchema.js";

// creating taskmodel named tasks
// add task to db
export const addTask = (obj) => {
  return taskSchema(obj).save();
};

export const getTask = (obj) => {
  return taskSchema.find();
};

export const updateTask = (_id, type) => {
  return taskSchema.findByIdAndUpdate(_id, type, { new: true });
};

export const deleteTask = (_id) => {
  return taskSchema.findByIdAndDelete(_id);
};
