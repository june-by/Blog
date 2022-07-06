const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("./userController");

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      //새로고침해도 로그인 유지되도록
      const UserInfo = await userController.GetUserInfo(req.user.id);
      return res.status(200).json(UserInfo);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { email, nickname, password } = req.body;
    await userController.CheckIdDuplicate(email, res);
    await userController.CheckNicknameDuplicate(nickname, res);
    await userController.SignUpUser(email, nickname, password);
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", (req, res, next) => {
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
      const userInfo = await userController.GetUserInfo();
      return res.status(200).json(userInfo);
    });
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "https://byjuun.com",
  }),
  (req, res) => {
    return res.redirect("https://byjuun.com");
  }
);

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "https://byjuun.com",
  }),
  (req, res) => {
    return res.redirect("https://byjuun.com");
  }
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://byjuun.com",
  }),
  (req, res) => {
    return res.redirect("https://byjuun.com");
  }
);

router.patch("/changeNickname", async (req, res, next) => {
  if (!req.user) {
    return res.status(403).send("로그인이 되어 있지 않습니다");
  }
  try {
    const { nickname } = req.body;
    const { id } = req.user;
    await userController.CheckNicknameDuplicate(nickname, res);
    await userController.ChangeNickname(nickname, id);
    return res.status(201).json(req.user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
