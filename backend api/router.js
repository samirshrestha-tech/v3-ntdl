// import { Router } from "express";
import express from "express";
import { addTask, deleteTask, getTask, updateTask } from "./model/Taskmodel.js";

// import router from "router";

// creating a seperate route table for handling api requests
const router = express.Router();

router.get("/", async (req, res) => {
  const tasklist = await getTask(req.body);
  console.log(tasklist);
  res.json({
    status: "success",
    message: "here is the tasklist",
    tasklist,
  });
});

router.post("/", async (req, res) => {
  const tasklist = await addTask(req.body);

  tasklist?._id
    ? res.json({
        status: "success",
        message: "Task has been added successfully",
      })
    : res.json({
        status: "error",
        message: "Sorry the task couldn't be added successfully",
      });
});

// patch method for updating the task type by comparing the id against the existing

router.patch("/", async (req, res) => {
  const { _id, type } = req.body;

  console.log(req.body);

  const result = await updateTask(_id, { type });
  console.log(result);

  result?._id
    ? res.json({
        status: "success",
        message: "task has been updated",
      })
    : res.json({
        status: "error",
        message: "the task cannot be updated",
      });
});

router.delete("/", async (req, res) => {
  const { _id } = req.params;

  console.log(_id);
  const result = await deleteTask(_id);

  console.log(result);
  result?.deletedCount
    ? res.json({
        status: "success",
        message: " the task has been successfully deleted",
      })
    : res.json({
        status: "error",
        message: " the task could not be  successfully deleted",
      });
});

export default router;
