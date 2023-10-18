const express = require("express");
const { signin } = require("../controllers/adminController");
const router = express.Router();

// for signup
// router.post("/signup", signup);

// for signin
router.post("/signin", signin);

module.exports = router;
