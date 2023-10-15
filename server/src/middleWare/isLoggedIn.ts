import { MESSAGE } from "@constants";
import { NextFunction, Request, Response } from "express";

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send(MESSAGE.LOGIN_NEEDED);
  }
};

export default isLoggedIn;
