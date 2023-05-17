// external imports
const express = require("express");
const router = express.Router();
// internal imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlTitle = require("../middlewares/common/decorateHtmlTitle");

router.get("/", decorateHtmlTitle("Login"), getLogin);
module.exports = router;
