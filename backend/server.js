import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import hackathonRoutes from "./routes/hackathonRoutes.js";



dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.get("/",(req,res) => {
  res.send("HackFinder API Running");
});


app.use("/api/auth",authRoutes);
app.use("/api/hackathons",hackathonRoutes);

const port = process.env.port || 5000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
