import express from "express";
import visitorController from "./visitorController";
import { cacheMiddleware } from "@middleware/cacheMiddleware";
const router = express.Router();

router.get("/", cacheMiddleware(), visitorController.getVisitor);

router.post("/", visitorController.addVisitor);

export default router;
