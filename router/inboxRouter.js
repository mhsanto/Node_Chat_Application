// external imports
const express = require("express");
const router = express.Router();
// internal imports
const decorateHtmlTitle = require("../middlewares/common/decorateHtmlTitle");
const { getInbox } = require("../controller/inboxController");

router.get("/", decorateHtmlTitle("Inbox"), getInbox);
module.exports = router;
