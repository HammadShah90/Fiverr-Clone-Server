import express from "express";

const conversationRouter = express.Router();

conversationRouter.get("/test", (req, res) => {
  res.send("conversationRouter!");
});

export default conversationRouter;