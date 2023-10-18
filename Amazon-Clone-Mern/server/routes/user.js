const express = require("express");
const { signup, signin } = require("../controllers/userController");
const router = express.Router();

// for signup
router.post("/signup", signup);

// for signin
router.post("/signin", signin);

module.exports = router;