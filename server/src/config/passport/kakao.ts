import passport from "passport";
import { Strategy } from "passport-kakao";
import { Users } from "src/database";
import userService from "src/routes/User/userService";

export default () => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.KAKAO_CLIENT_ID as string,
        callbackURL:
          process.env.NODE_ENV === "production"
            ? "https://api.byjuun.com/user/kakao/callback"
            : "https://local.byjuun.com:8080/user/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done: Function) => {
        try {
          const { username } = profile as { username: string };

          let user = await Users.findOne({
            where: { nickname: username, provider: "kakao" },
          });
          if (!user) {
            await userService.addUser({
              nickname: username,
              provider: "kakao",
            });
            user = await Users.findOne({
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
