import express from "express";
import seriesController from "./seriesController";
import { cacheClearMiddleWare, cacheMiddleware, isAdmin } from "@middleware";
const router = express.Router();

router.get("/", cacheMiddleware(), seriesController.getAllSeries);

router.post(
  "/",
  isAdmin,
  cacheClearMiddleWare("series"),
  seriesController.addSeries
);

export default router;
