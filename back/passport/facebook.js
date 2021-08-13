const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const {User} = require('../models');

module.exports = () => {
 
  passport.use(new FacebookStrategy({ 
    clientID: process.env.FACEBOOK_ID,
    clientSecret : process.env.FACEBOOK_PWD,
    callbackURL: 'https://api.byjuun.com/user/facebook/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const exUser = await User.findOne({
        where: { snsId: profile.id, provider: 'facebook' },
      });
      if (exUser) {
        done(null, exUser);
      } else {
        let nickcolor;
        const RandomNumber = Math.floor(Math.random() * 9); //0~8
        switch (RandomNumber) {
          case 0:
              nickcolor = "#ffa39e"
              break;
          case 1:
              nickcolor = "#ffbb96"
              break;
          case 2:
              nickcolor = "#ffa940"
              break;
          case 3:
              nickcolor = "#bae637"
              break;
          case 4:
              nickcolor = "#5cdbd3"
              break;
          case 5:
              nickcolor = "#006d75"
              break;
          case 6:
              nickcolor = "#adc6ff"
              break;
          case 7:
              nickcolor = "#d3adf7"
              break;
          case 8:
              nickcolor = "#ffadd2"
              break;
          default :
              nickcolor = "#d9d9d9"
      }

        const newUser = await User.create({
          email: null,
          nickname: profile.displayName,
          snsId: profile.id,
          provider: 'facebook',
          color : nickcolor,
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};