import express from "express";
import seriesController from "./seriesController";
const router = express.Router();

router.get("/", seriesController.getAllSeries);

router.post("/", seriesController.addSeries);

export default router;
