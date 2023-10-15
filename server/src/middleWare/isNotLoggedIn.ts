import { MESSAGE } from "@constants";
import { NextFunction, Request, Response } from "express";

const isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).send(MESSAGE.LOGOUT_NEEDED);
  }
};

export default isNotLoggedIn;
