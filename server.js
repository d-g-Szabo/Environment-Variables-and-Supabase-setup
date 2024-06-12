import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = 8008;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is the root route!");
});

app.get("/api", async (req, res) => {
  const API = process.env.UNSPLASH_ACCESS_KEY;
  const response = await fetch(API);
  const imageData = await response.json();

  res.json(imageData.results);
});
