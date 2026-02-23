const express = require("express");
const {
  getAllElectives,
  getElectiveById,
} = require("../controllers/electiveController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getAllElectives);
router.get("/:id", authMiddleware, getElectiveById);

module.exports = router;

