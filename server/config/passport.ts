import passport from "passport";
import { Strategy } from "passport-local";
import model from "models";

type User = {
  id: number;
};

export default () => {
  passport.serializeUser((user, done) => {
    done(null, (user as User).id); //서버에는 userid만 들고 있는다
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await model.User.findOne({ where: { id } });
      done(null, user); //req.user안에 넣어줌.
    } catch (error) {
      console.error(error);
    }
  });
  local();
};
import bcrypt from "bcrypt";
const { User } = model;

function local() {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email: string, password: string, done: Function) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 사용자입니다" });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다" });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
}
