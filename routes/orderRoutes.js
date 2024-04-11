import express from "express";

const orderRouter = express.Router();

orderRouter.get("/test", (req, res) => {
  res.send("Hello World!");
});

export default orderRouter;