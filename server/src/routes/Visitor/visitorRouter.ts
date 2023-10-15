import express from "express";
import visitorController from "./visitorController";
import { cacheMiddleware } from "@middleware/cacheMiddleware";
import { cacheClearMiddleWare } from "@middleware/cacheClearMiddleware";
const router = express.Router();

router.get("/", cacheMiddleware(), visitorController.getVisitor);

router.post("/", cacheClearMiddleWare("visitor"), visitorController.addVisitor);

export default router;
