const { User } = require("../models");
const bcrypt = require("bcrypt");
const userService = require("./userService");
const passport = require("passport");

const getUser = async (req, res, next) => {
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

const addUser = async (req, res, next) => {
  try {
    const { email, nickname, password } = req.body;
    const isEmailExists = await userService.checkEmailValidation({ email });
    if (isEmailExists) return res.status(403).send("이미 사용 중인 아이디 입니다");

    const isNicknameExists = await userService.checkNicknameValidation({ nickname });
    if (isNicknameExists) return res.status(403).send("이미 사용 중인 닉네임 입니다");

    await userService.addUser({ email, nickname, password });

    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const login = async (req, res, next) => {
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
      const user = await userService.getUser({ id });
      return res.status(200).json(user);
    });
  })(req, res, next);
};

const logout = async (req, res, next) => {
  try {
    req.logout();
    req.session.destroy();
    return res.send("ok");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = { getUser, addUser, logout, login };
