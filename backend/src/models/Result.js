const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    electiveId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Elective",
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    attemptNumber: {
      type: Number,
      required: true,
      min: 1,
      max: 2,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);

