import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3500;

const app = express();
app.use(cors());
app.use(express.json());

import userRoutes from "./routes/userRoutes.js";
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running at PORT: ${PORT}`);
});
