import express from "express";
import seriesController from "./seriesController";
import { isAdmin } from "@middleware/isAdmin";
const router = express.Router();

router.get("/", seriesController.getAllSeries);

router.post("/", isAdmin, seriesController.addSeries);

export default router;
