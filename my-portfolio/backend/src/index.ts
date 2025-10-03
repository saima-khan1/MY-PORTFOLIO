import express from "express";
import cors from "cors";
import mongoose, { Mongoose } from "mongoose";
import * as dotenv from "dotenv";
import projectRoutes from "./routes/Projects";

dotenv.config();
const app = express();
const Port = 5005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/projects", projectRoutes);

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
