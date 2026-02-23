const express = require("express");
const { body } = require("express-validator");
const { signup, login, getMe } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/signup",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("rollNo").notEmpty().withMessage("Roll number is required"),
    body("branch").notEmpty().withMessage("Branch is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  signup
);

router.post(
  "/login",
  [
    body("emailOrRoll")
      .notEmpty()
      .withMessage("Email or Roll number is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  login
);

router.get("/me", authMiddleware, getMe);

module.exports = router;

