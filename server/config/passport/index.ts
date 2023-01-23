import passport from "passport";
import local from "./local";
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
