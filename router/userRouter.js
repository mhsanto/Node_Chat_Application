// external imports
const express = require("express");

const router = express.Router();
// internal imports
const { getUser } = require("../controller/userController");
const uploadAvatar = require("../middlewares/users/uploadAvatar");
const decorateHtmlTitle = require("../middlewares/common/decorateHtmlTitle");
//user page
router.get("/", decorateHtmlTitle("User"), getUser);
//adding users
router.post("/", uploadAvatar);
module.exports = router;
