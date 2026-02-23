const express = require("express");
const { body } = require("express-validator");
const {
  getQuestionsForElective,
  submitQuizForElective,
} = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:electiveId/questions", authMiddleware, getQuestionsForElective);

router.post(
  "/:electiveId/submit",
  authMiddleware,
  [
    body("answers")
      .isArray({ min: 1 })
      .withMessage("Answers array with at least one entry is required"),
    body("answers.*.questionId")
      .notEmpty()
      .withMessage("Each answer must reference questionId"),
    body("answers.*.selectedOption")
      .notEmpty()
      .withMessage("Each answer must include selectedOption"),
  ],
  submitQuizForElective
);

module.exports = router;

