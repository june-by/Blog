import passport from "passport";
import { Strategy } from "passport-local";
import { Users } from "src/database";
import bcrypt from "bcrypt";

export default () => {
  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email: string, password: string, done: Function) => {
        try {
          const user = await Users.findOne({
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
};
