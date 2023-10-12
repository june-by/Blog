import { NextFunction, Request, Response } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const id = req.user?.id;

  if (!id) {
    return res.status(401).send("관리자만 이용 가능합니다.");
  }
  console.log("id : ", id);
  console.log("rocess.env.ADMIN_ID : ", process.env.ADMIN_ID);

  if (String(id) !== process.env.ADMIN_ID) {
    return res.status(401).send("관리자만 이용 가능합니다.");
  }

  next();
};
