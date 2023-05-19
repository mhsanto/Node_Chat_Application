// external imports
const express = require("express");
const router = express.Router();
// internal imports
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { getInbox } = require("../controller/inboxController");

router.get("/", decorateHtmlResponse("Inbox"), getInbox);
module.exports = router;
