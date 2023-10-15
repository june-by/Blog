import express from "express";
import seriesController from "./seriesController";
import { isAdmin } from "@middleware/isAdmin";
import { cacheMiddleware } from "@middleware/cacheMiddleware";
import { cacheClearMiddleWare } from "@middleware/cacheClearMiddleware";
const router = express.Router();

router.get("/", cacheMiddleware(), seriesController.getAllSeries);

router.post(
  "/",
  isAdmin,
  cacheClearMiddleWare("series"),
  seriesController.addSeries
);

export default router;
