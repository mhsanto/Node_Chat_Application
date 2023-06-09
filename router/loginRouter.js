// external imports
const express = require("express");
const router = express.Router();
// internal imports
const { getLogin, login, logout } = require("../controller/loginController");
const {
  loginValidationHandler,
  loginValidator,
} = require("../middlewares/login/userLogin");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const checkLogin = require("../middlewares/common/checkLogin");
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
router.delete("/", logout);
module.exports = router;
