// external imports
const express = require("express");
const router = express.Router();
// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getInbox } = require("../controller/inboxController");
const { checkLogin } = require("../middlewares/common/checkLogin");

router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);
module.exports = router;
