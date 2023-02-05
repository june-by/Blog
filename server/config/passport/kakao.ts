import passport from "passport";
import { Strategy } from "passport-kakao";
import model from "models";
import userService from "src/User/userService";
const { User } = model;

export default () => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.KAKAO_CLIENT_ID as string,
        callbackURL:
          process.env.NODE_ENV === "production"
            ? "https://api.byjuun.com/user/kakao/callback"
            : "http://localhost:3065/user/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done: Function) => {
        try {
          const { username } = profile as { username: string };
          console.log("username : ", username);
          let user = await User.findOne({
            where: { nickname: username, provider: "kakao" },
          });
          console.log("beforeCreateUser : ", user);

          if (!user) {
            await userService.addUser({ nickname: username, provider: "kakao" });
            user = await User.findOne({
              where: { nickname: username, provider: "kakao" },
            });
          }
          return done(null, user);
        } catch (err) {
          console.log("err : ", err);
          return done(err);
        }
      }
    )
  );
};
