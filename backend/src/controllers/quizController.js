const { validationResult } = require("express-validator");
const QuizQuestion = require("../models/QuizQuestion");
const Result = require("../models/Result");
const User = require("../models/User");

const MAX_ATTEMPTS_PER_ELECTIVE = 2;
const PASSING_SCORE = 6; // configurable threshold out of 10

// GET /api/quiz/:electiveId/questions
const getQuestionsForElective = async (req, res, next) => {
  try {
    const questions = await QuizQuestion.find({
      electiveId: req.params.electiveId,
    }).select("-correctAnswer");

    if (!questions || questions.length === 0) {
      return res
        .status(404)
        .json({ message: "No quiz questions found for this elective" });
    }

    res.json({
      questions,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/quiz/:electiveId/submit
// Expects body: { answers: [{ questionId, selectedOption }] }
const submitQuizForElective = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { electiveId } = req.params;
    const { answers } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);

    // Enforce max attempts strictly.
    const attemptEntry =
      user.attempts.find(
        (entry) => entry.elective.toString() === electiveId.toString()
      ) || null;

    const currentCount = attemptEntry ? attemptEntry.count : 0;

    if (currentCount >= MAX_ATTEMPTS_PER_ELECTIVE) {
      return res.status(400).json({
        message:
          "Maximum attempts reached for this elective. You cannot retake this quiz.",
      });
    }

    const questionIds = answers.map((a) => a.questionId);
    const questions = await QuizQuestion.find({ _id: { $in: questionIds } });

    let score = 0;
    questions.forEach((q) => {
      const submitted = answers.find(
        (a) => a.questionId.toString() === q._id.toString()
      );
      if (submitted && submitted.selectedOption === q.correctAnswer) {
        score += 1;
      }
    });

    const attemptNumber = currentCount + 1;

    const result = await Result.create({
      userId,
      electiveId,
      score,
      attemptNumber,
    });

    if (attemptEntry) {
      attemptEntry.count = attemptNumber;
    } else {
      user.attempts.push({ elective: electiveId, count: attemptNumber });
    }
    await user.save();

    res.status(201).json({
      message: "Quiz submitted successfully",
      result,
      passed: score >= PASSING_SCORE,
      remainingAttempts: MAX_ATTEMPTS_PER_ELECTIVE - attemptNumber,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getQuestionsForElective,
  submitQuizForElective,
  MAX_ATTEMPTS_PER_ELECTIVE,
  PASSING_SCORE,
};

