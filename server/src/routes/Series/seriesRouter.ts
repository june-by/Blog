import express from "express";
import seriesController from "./seriesController";
import { isAdmin } from "@middleware/isAdmin";
import { cacheMiddleware } from "@middleware/cacheMiddleware";
const router = express.Router();

router.get("/", cacheMiddleware(), seriesController.getAllSeries);

router.post("/", isAdmin, seriesController.addSeries);

export default router;
