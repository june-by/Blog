import { NextFunction, Request, Response } from "express";

export const isNotLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};
