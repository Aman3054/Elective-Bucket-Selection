const Result = require("../models/Result");
const Elective = require("../models/Elective");

// GET /api/results/me
// Returns all quiz attempts for the logged-in user.
const getMyResults = async (req, res, next) => {
  try {
    const results = await Result.find({ userId: req.user._id })
      .populate("electiveId", "title")
      .sort({ createdAt: -1 });

    res.json(results);
  } catch (err) {
    next(err);
  }
};

// GET /api/results/recommendation
// Recommends elective with best performance (highest score; ties = latest attempt).
const getRecommendation = async (req, res, next) => {
  try {
    const results = await Result.find({ userId: req.user._id }).populate(
      "electiveId",
      "title description salaryInfo skills"
    );

    if (!results || results.length === 0) {
      return res.status(404).json({
        message:
          "No quiz attempts found. Complete at least one quiz to get a recommendation.",
      });
    }

    // Group by elective, pick best attempt.
    const bestByElective = new Map();
    results.forEach((r) => {
      const key = r.electiveId._id.toString();
      const existing = bestByElective.get(key);
      if (!existing) {
        bestByElective.set(key, r);
      } else if (r.score > existing.score) {
        bestByElective.set(key, r);
      } else if (r.score === existing.score && r.createdAt > existing.createdAt) {
        bestByElective.set(key, r);
      }
    });

    let recommended = null;
    bestByElective.forEach((result) => {
      if (!recommended || result.score > recommended.score) {
        recommended = result;
      } else if (
        recommended &&
        result.score === recommended.score &&
        result.createdAt > recommended.createdAt
      ) {
        recommended = result;
      }
    });

    if (!recommended) {
      return res.status(404).json({
        message: "Could not derive recommendation from your attempts.",
      });
    }

    res.json({
      elective: recommended.electiveId,
      score: recommended.score,
      attemptNumber: recommended.attemptNumber,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getMyResults,
  getRecommendation,
};

