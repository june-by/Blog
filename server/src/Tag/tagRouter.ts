import express from "express";
import tagController from "./tagController";
const router = express.Router();

router.get("/recent", tagController.getRecentTags);

export default router;
