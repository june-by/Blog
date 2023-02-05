import passport from "passport";
import GitHubStrategy from "passport-github";
import model from "models";
import userService from "src/User/userService";
const { User } = model;

export default () => {
  passport.use(
    new GitHubStrategy.Strategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRETS as string,
        callbackURL:
          process.env.NODE_ENV === "production"
            ? "https://api.byjuun.com/user/github/callback"
            : "http://localhost:3065/user/github/callback",
      },
      async (accessToken, refreshToken, profile, done: Function) => {
        try {
          const { name } = profile._json as { name: string };
          let user = await User.findOne({
            where: { nickname: name, provider: "github" },
          });
          if (!user) {
            await userService.addUser({ nickname: name, provider: "github" });
            user = await User.findOne({
              where: { nickname: name, provider: "github" },
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
