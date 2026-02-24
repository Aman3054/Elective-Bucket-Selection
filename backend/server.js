const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const errorHandler = require("./src/middleware/errorHandler");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// ✅ PRODUCTION-SAFE CORS (supports multiple Vercel domains)
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",")
  : [];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests without origin (Postman, mobile apps)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Elective Bucket Selection API is running" });
});

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/electives", require("./src/routes/electiveRoutes"));
app.use("/api/quiz", require("./src/routes/quizRoutes"));
app.use("/api/results", require("./src/routes/resultRoutes"));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});