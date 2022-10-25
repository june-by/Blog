import express from "express";
import visitorController from "./visitorController";
import { addVisitor } from "./visitorService";
const router = express.Router();

router.get("/", visitorController.getVisitor);

router.post("/", addVisitor);

export default router;
