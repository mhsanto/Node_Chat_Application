const Uploader = require("../../utilities/Uploader");
const uploadAvatar = (req, res, next) => {
  const upload = Uploader(
    "avatars",
    ["images/jpeg", "images/png", "images/jpg"],
    1000000,
    "Only images like png,jpg and jpeg format allowed"
  );
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        error: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
};
module.exports = uploadAvatar;
