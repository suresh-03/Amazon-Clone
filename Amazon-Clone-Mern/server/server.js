import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3500;

const app = express();
app.use(cors());
app.use(express.json());
// for form data
app.use(express.urlencoded({ extended: true }));

import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import connectDB from "./database/connection.js";

// database connection
connectDB();
// app.use(notFound);

app.use("/api/user", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at PORT: ${PORT}`);
});
