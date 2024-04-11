import express from "express";

const gigRouter = express.Router();

gigRouter.get("/test", (req, res) => {
  res.send("gigRouter!");
});

export default gigRouter;