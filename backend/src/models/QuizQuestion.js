const mongoose = require("mongoose");

const quizQuestionSchema = new mongoose.Schema(
  {
    electiveId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Elective",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
      validate: (v) => Array.isArray(v) && v.length >= 2,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizQuestion", quizQuestionSchema);

