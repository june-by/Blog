import passport from "passport";
import GitHubStrategy from "passport-github";
import { Users } from "src/database";
import userService from "src/User/userService";

export default () => {
  passport.use(
    new GitHubStrategy.Strategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRETS as string,
        callbackURL:
          process.env.NODE_ENV === "production"
            ? "https://api.byjuun.com/user/github/callback"
            : "https://local.byjuun.com:8080/user/github/callback",
      },
      async (accessToken, refreshToken, profile, done: Function) => {
        try {
          const { name: nickname } = profile._json as { name: string };
          let user = await Users.findOne({
            where: { nickname, provider: "github" },
          });
          if (!user) {
            await userService.addUser({ nickname, provider: "github" });
            user = await Users.findOne({
              where: { nickname, provider: "github" },
            });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
