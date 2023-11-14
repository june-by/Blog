import { getVisitorDateInfo } from "./utils";
import visitorService from "./visitorService";
import { NextFunction, Request, Response } from "express";

const getVisitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { totalVisitor, todayVisitor } = await visitorService.getVisitor({
      date: getVisitorDateInfo(),
    });
    return res.status(201).json({ totalVisitor, todayVisitor });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getVisitor,
};
