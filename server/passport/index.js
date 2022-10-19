const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); //서버에는 userid만 들고 있는다
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); //req.user안에 넣어줌.
    } catch (error) {
      console.error(error);
    }
  });
  local();
};
