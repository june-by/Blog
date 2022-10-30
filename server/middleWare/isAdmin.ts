import { NextFunction, Request, Response } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user as { id: string };
  console.log("id : ", id);
  console.log("typeof id : ", typeof id);
  if (id === "1") {
    next();
  } else {
    res.status(401).send("관리자만 이용 가능합니다.");
  }
};
