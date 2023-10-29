const express = require("express");
const { signin } = require("../controllers/admin/adminController");
const { dashboard } = require("../controllers/admin/dashboard");
const { requireSignin, adminMiddleware } = require("../middlewares/middleware");
const router = express.Router();

// for signup
// router.post("/signup", signup);

// for signin
router.post("/signin", signin);

router.get("/dashboard", requireSignin, adminMiddleware, dashboard);

module.exports = router;
