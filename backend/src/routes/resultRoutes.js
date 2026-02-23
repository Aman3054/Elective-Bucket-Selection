const express = require("express");
const {
  getMyResults,
  getRecommendation,
} = require("../controllers/resultController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/me", authMiddleware, getMyResults);
router.get("/recommendation", authMiddleware, getRecommendation);

module.exports = router;

