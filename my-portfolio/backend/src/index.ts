import express from "express";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();
const Port = 5005;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("connected to mongoDB");
  } catch (err) {
    console.error("❌ Failed to connect MongoDB:", err);
  }
};
app.listen(Port, async () => {
  console.log(`✅ Server running on http://localhost:${Port}`);
  await connectDB();
});
