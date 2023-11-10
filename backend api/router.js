// import { Router } from "express";
import express from "express";
import { addTask } from "./model/Taskmodel.js";

// import router from "router";

// creating a seperate route table for handling api requests
const router = express.Router();

router.get("/", async (req, res) => {
  const tasklist = await addTask();
  console.log(tasklist);
  res.json({
    status: "success",
    message: "hurray",
  });
});
export default router;
