const { check, validationResult } = require("express-validator");
const loginValidator = [
  check("username").isLength({ min: 1 }).withMessage("Enter your username"),
  check("password").isLength({ min: 1 }).withMessage("Enter your password"),
];
const loginValidationHandler = (req, res, next) => {
  const error = validationResult(req);
  const mappedError = error.mapped();
  if (Object.keys(mappedError).length === 0) {
    next();
  } else {
    res.render("index", {
      data: {
        username: req.body.username,
      },
      errors: mappedError,
    });
  }
};
module.exports = {
  loginValidator,
  loginValidationHandler,
};
