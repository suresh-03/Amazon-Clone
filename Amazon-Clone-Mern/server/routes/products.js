const express = require("express");
const { createProduct, upload } = require("../controllers/admin/createProduct");
const { requireSignin } = require("../middlewares/middleware");
const router = express.Router();

router.post(
  "/createProduct",
  requireSignin,
  upload.single("image"),
  createProduct
);

module.exports = router;
