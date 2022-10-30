import { NextFunction, Request, Response } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user as { id: number };
  if (String(id) === process.env.ADMIN_ID) {
    next();
  } else {
    res.status(401).send("관리자만 이용 가능합니다.");
  }
};
