const multer = require("multer");
const path = require("path");
const createError = require("http-errors");
const Uploader = (
  subfolder_path,
  allowed_file_type,
  max_file_size,
  not_allowed
) => {
  const whereToUpload = `${__dirname}/public/uploads/${subfolder_path}`;
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, whereToUpload);
    },
    filename: (req, file, cb) => {
      const extName = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(extName, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, fileName + extName);
    },
  });
  const upload = multer({
    storage: storage,
    limits: { max_file_size },
    fileFilter: (req, file, cb) => {
      if (allowed_file_type.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(not_allowed));
      }
    },
  });
  return upload;
};
module.export = Uploader;
