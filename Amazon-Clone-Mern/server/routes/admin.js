const express = require("express");
const { signin } = require("../controllers/admin/adminController");
const { requireSignin, adminMiddleware } = require("../middlewares/middleware");
const { dashboard } = require("../controllers/admin/dashboard");
const router = express.Router();

// for signup
// router.post("/signup", signup);

// for signin
router.post("/signin", signin);

router.get("/dashboard", requireSignin, adminMiddleware, dashboard);

module.exports = router;
