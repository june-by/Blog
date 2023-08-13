import express from "express";
import seriesController from "./seriesController";
const router = express.Router();

router.get("/load", seriesController.getAllSeries);

router.get("/load/:seriesId", seriesController.getSeries);

router.post("/", seriesController.addSeries);

export default router;
