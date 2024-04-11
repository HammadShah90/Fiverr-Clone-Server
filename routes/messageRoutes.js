import express from "express";

const messageRouter = express.Router();

messageRouter.get("/test", (req, res) => {
  res.send("Hello World!");
});

export default messageRouter;