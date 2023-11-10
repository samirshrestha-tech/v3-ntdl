import express, { Router } from "express";
import taskRouter from "./router.js";
import { connectDb } from "./config/dbconfig.js";

// using express library for creating an api

const app = express();

// connecting database with the server
connectDb();

// middleware for using express json
app.use(express.json());

const PORT = 8000;
// importing the router
app.use("/api/v1", taskRouter);

app.get("/", (req, res) => {
  res.json({
    success: "yes",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your website is running at http://localhost:` + PORT);
});
