import {
  getKRTime,
  getNextKRDay,
  getVisitorDateInfo,
} from "@routes/Visitor/utils";
import visitorService from "@routes/Visitor/visitorService";
import { NextFunction, Request, Response } from "express";

const visitorCountMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Object.keys(req.cookies).indexOf(KEY_FOR_VISITOR) === -1) {
    const now = getKRTime();
    const nextDay = getNextKRDay();

    res.cookie(KEY_FOR_VISITOR, now.toString(), {
      expires: nextDay,
    });

    visitorService.addVisitor();
  }

  next();
};

export default visitorCountMiddleWare;

const KEY_FOR_VISITOR = "VISITOR";
