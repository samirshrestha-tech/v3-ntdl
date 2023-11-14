// import { Router } from "express";
import express from "express";
import { addTask, getTask, updateTask } from "./model/Taskmodel.js";

// import router from "router";

// creating a seperate route table for handling api requests
const router = express.Router();

router.get("/", async (req, res) => {
  const tasklist = await getTask(req.body);
  console.log(tasklist);
  res.json({
    status: "success",
    message: "here is the tasklist",
  });
});

router.post("/", async (req, res) => {
  const tasklist = await addTask(req.body);
  console.log(tasklist);
  res.json({
    status: "success",
    message: "task has been added",
  });
});

// patch method for updating the task type by comparing the id against the existing

router.patch("/", async (req, res) => {
  const { _id, type } = req.body;

  console.log(req.body);

  const updatedTasklist = await updateTask(_id, { type });
  console.log(updatedTasklist);

  updatedTasklist?._id
    ? res.json({
        status: "success",
        message: "task has been updated",
      })
    : res.json({
        status: "error",
        message: "the task cannot be updated",
      });
});

export default router;
