// external imports
const express = require("express");
const router = express.Router();
// internal imports
const { getLogin, login } = require("../controller/loginController");
const {
  loginValidationHandler,
  loginValidator,
} = require("../middlewares/login/userLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const title = "login";
router.get("/", decorateHtmlResponse(title), getLogin);
//user login
router.post(
  "/",
  decorateHtmlResponse(title),
  loginValidator,
  loginValidationHandler,
  login
);
module.exports = router;
