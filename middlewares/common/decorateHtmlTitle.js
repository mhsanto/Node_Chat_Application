function decorateHtmlTitle(title_text) {
  return function (req, res, next) {
    (res.locals.html = true),
      (res.locals.title = `${title_text} - ${process.env.APP_NAME}`);
    next();
  };
}
module.exports = decorateHtmlTitle;
