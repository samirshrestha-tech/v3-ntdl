import mongoose from "mongoose";
import taskSchema from "./TaskSchema.js";

// creating taskmodel named tasks
// add task to db
export const addTask = (obj) => {
  return taskSchema(obj).save();
};
