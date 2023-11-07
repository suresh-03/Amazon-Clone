import express from "express";
const router = express.Router();
import {
  getUserProfile,
  signin,
  signout,
  signup,
} from "../controllers/userControllers.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", getUserProfile);
router.post("/signout", signout);

export default router;
