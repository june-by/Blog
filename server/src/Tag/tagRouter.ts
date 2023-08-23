import express from "express";
import tagController from "./tagController";
const router = express.Router();

router.get("/", tagController.getAllTags);

export default router;
