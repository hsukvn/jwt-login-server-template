exports.get = function(req, res, next) {
  res.send({ user: req.user });
}
