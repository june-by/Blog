import { getVisitorDateInfo } from "./utils";
import visitorService from "./visitorService";
import { NextFunction, Request, Response } from "express";

const getVisitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dateInfo = getVisitorDateInfo();
    const totalVisitor = await visitorService.getTotalVisitor();
    const todayVisitor = await visitorService.getTodayVisitor({ dateInfo });
    return res.status(201).json({ totalVisitor, todayVisitor });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addVisitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dateInfo = getVisitorDateInfo();
    await visitorService.addVisitor({ dateInfo });
    //await getVisitor();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getVisitor,
  addVisitor,
};
