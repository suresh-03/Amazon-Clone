const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();

// connecting to database
const connectDB = require("./connectionDB/connect");
connectDB();

// signup and signin routes
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running in PORT ${process.env.PORT}`);
});
