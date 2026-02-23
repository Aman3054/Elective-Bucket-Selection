const Elective = require("../models/Elective");

// GET /api/electives
const getAllElectives = async (req, res, next) => {
  try {
    const electives = await Elective.find().sort({ createdAt: 1 });
    res.json(electives);
  } catch (err) {
    next(err);
  }
};

// GET /api/electives/:id
const getElectiveById = async (req, res, next) => {
  try {
    const elective = await Elective.findById(req.params.id);
    if (!elective) {
      return res.status(404).json({ message: "Elective not found" });
    }
    res.json(elective);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllElectives,
  getElectiveById,
};

