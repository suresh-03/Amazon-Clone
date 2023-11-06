import express from "express";
const router = express.Router();
import { signup } from "../controllers/userControllers.js";

router.get("/signup", signup);

export default router;
