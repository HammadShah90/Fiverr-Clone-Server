import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import reviewRouter from "./routes/reviewRoutes.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import gigRouter from "./routes/gigRoutes.js";
import conversationRouter from "./routes/conversationRoutes.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

// Middlewares
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/orders", orderRouter);
app.use("/api/messages", messageRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/conversations", conversationRouter);

// Server
const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Backend server is Running`);
    });
    await connectDB(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};
start();
