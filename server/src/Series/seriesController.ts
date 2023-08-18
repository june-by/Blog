import { NextFunction, Request, Response } from "express";
import seriesService from "./seriesService";

const getAllSeries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const series = await seriesService.getAllSeries();
    return res.status(200).json(series);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addSeries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, shortDescription, thumbNailUrl } = req.body;
    const series = await seriesService.addSeries({
      title,
      shortDescription,
      thumbNailUrl,
    });
    return res.status(200).json(series);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getAllSeries,
  addSeries,
};
