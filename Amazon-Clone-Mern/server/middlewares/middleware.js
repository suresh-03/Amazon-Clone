const jwt = require("jsonwebtoken");
const { loggedIn } = require("../controllers/admin/adminController");

function requireSignin(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }

  next();
}

function adminMiddleware(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "Access Denied" });
  }
  next();
}

function userMiddleware(req, res, next) {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "Access Denied" });
  }
  next();
}

module.exports = {
  requireSignin,
  adminMiddleware,
  userMiddleware,
};
