import express from "express";
import commentController from "./commentController";
const router = express.Router();

router.get("/recent", commentController.getRecentComment);

export default router;
