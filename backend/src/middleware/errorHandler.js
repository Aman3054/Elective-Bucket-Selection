// Normalizes error responses across the API to keep controllers clean.
// Place AFTER all route registrations.
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error("Unhandled error:", err);

  const statusCode = err.statusCode || 500;
  const message =
    err.message || "Something went wrong. Please try again later.";

  res.status(statusCode).json({
    message,
  });
};

module.exports = errorHandler;

