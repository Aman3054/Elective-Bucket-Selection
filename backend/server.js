const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const errorHandler = require("./src/middleware/errorHandler");

dotenv.config();

const app = express();

// Connect to Mongo before we start listening.
connectDB();

// Basic middlewares for a production-ready API baseline.
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Elective Bucket Selection API is running" });
});

// Wire up modular routes.
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/electives", require("./src/routes/electiveRoutes"));
app.use("/api/quiz", require("./src/routes/quizRoutes"));
app.use("/api/results", require("./src/routes/resultRoutes"));

// Central error handler.
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

