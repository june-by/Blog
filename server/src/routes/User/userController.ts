import userService from "./userService";
import passport from "passport";
import { NextFunction, Request, Response } from "express";
import { MESSAGE } from "@constants";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) return res.status(200).json(null);
  const { id } = req.user;
  try {
    const user = await userService.getUser({ id });
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, nickname, password } = req.body;

    const isEmailExists = await userService.checkEmailValidation({ email });

    if (isEmailExists) return res.status(403).send(MESSAGE.ID_EXIST);

    const isNicknameExists = await userService.checkNicknameValidation({
      nickname,
    });

    if (isNicknameExists) return res.status(403).send(MESSAGE.NICKNAME_EXIST);

    await userService.addUser({ email, nickname, password });

    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const userInfo = await userService.getUser({ id: user.id });
      return res.status(200).json(userInfo);
    });
  })(req, res, next);
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.logout(() => {});
    req.session.destroy(() => {});
    return res.send("ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default { getUser, addUser, logout, login };
