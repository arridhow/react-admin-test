module.exports = (req, res, next) => {
  res.set("Access-Control-Expose-Headers", "Content-Range");
  res.set("Content-Range", "posts 0-10/20");
  next();
};
