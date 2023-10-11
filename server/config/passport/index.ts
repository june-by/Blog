import passport from "passport";
import local from "./local";
import { Users } from "database";
import github from "./github";
import kakao from "./kakao";

type User = {
  id: number;
};

export default () => {
  passport.serializeUser((user, done) => {
    done(null, (user as User).id); //서버에는 userid만 들고 있는다
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await Users.findOne({ where: { id } });
      done(null, user); //req.user안에 넣어줌.
    } catch (error) {
      console.error(error);
    }
  });
  local();
  github();
  kakao();
};
