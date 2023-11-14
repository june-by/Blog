import { NextFunction, Request, Response } from "express";

const visitorCountMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("req.cookies : ", Object.keys(req.cookies));
  next();
};

export default visitorCountMiddleWare;
