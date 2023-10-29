const express = require("express");
const {
  signup,
  signin,
  profile,
} = require("../controllers/user/userController");
const { requireSignin, userMiddleware } = require("../middlewares/middleware");
const router = express.Router();

// for signup
router.post("/signup", signup);

// for signin
router.post("/signin", signin);

router.get("/profile", requireSignin, userMiddleware, profile);

module.exports = router;
