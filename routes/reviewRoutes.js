import express from "express";

const reviewRouter = express.Router();

reviewRouter.get("/test", (req, res) => {
  res.send("Hello World!");
});

export default reviewRouter;
