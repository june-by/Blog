import { MESSAGE } from "@constants";
import { NextFunction, Request, Response } from "express";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const id = req.user?.id;

  if (!id) {
    return res.status(401).send(MESSAGE.ONLY_AVAILABLE_TO_ADMIN);
  }
  if (String(id) !== process.env.ADMIN_ID) {
    return res.status(401).send(MESSAGE.ONLY_AVAILABLE_TO_ADMIN);
  }

  next();
};

export default isAdmin;
