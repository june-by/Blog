import express from "express";
import visitorController from "./visitorController";
import { cacheClearMiddleWare, cacheMiddleware } from "@middleware";
const router = express.Router();

router.get("/", cacheMiddleware(), visitorController.getVisitor);

router.post("/", cacheClearMiddleWare("visitor"), visitorController.addVisitor);

export default router;
