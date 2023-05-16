const createError = require("http-errors");
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Your requested content was not found!"));
};
function errorHandler(err, req, res, next) {
  res.locals.error = process.env.NODE_ENV === "development" ? err : err.message;
  res.status(err.status || 500);
  if (res.locals.html) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.error);
  }
}
module.exports = {
  notFoundHandler,
  errorHandler,
};
