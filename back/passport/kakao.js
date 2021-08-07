const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

const {User} = require('../models');

module.exports = () => {
 
  passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/user/kakao/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    console.log('kakao profile', profile);
    try {
      const exUser = await User.findOne({
        where: { snsId: profile.id, provider: 'kakao' },
      });
      if (exUser) {
        done(null, exUser);
      } else {

        const RandomNumber = Math.floor(Math.random() * 9); //0~8
        let nickcolor;
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
          email: profile._json && profile._json.kakao_account_email,
          nickname: profile.displayName,
          snsId: profile.id,
          provider: 'kakao',
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