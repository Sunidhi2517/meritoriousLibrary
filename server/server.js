const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(express.json());

const allowedOrigins = ["https://librarymeritorious.onrender.com"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

connectDB();

app.use("/api", require("./routes/queryRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));