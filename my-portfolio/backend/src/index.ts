import express from "express";
import cors from "cors";

const app = express();
const Port = 5005;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(Port, () => {
  console.log(`✅ Server running on http://localhost:${Port}`);
});
