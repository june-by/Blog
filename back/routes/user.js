const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');
const passport = require('passport');

router.get('/',async(req,res,next)=>{
    try{
        if(req.user) //새로고침해도 로그인 유지되도록
        {
            const user = await User.findOne({
                where : {id : req.user.id}
            });
            const fullUserWithoutPassword = await User.findOne({
                where : {id : user.id},
                attributes : {
                    exclude : ['password']
                },
            });
            return res.status(200).json(fullUserWithoutPassword);
        }else {
            res.status(200).json(null);
        }
    }catch(error){
        console.error(error);
        next(error);
    }
})

router.post('/signup', async (req, res, next) => {
    try { //await하는애들은 비동기니까 try catch로 감싸기
        const exUser = await User.findOne({ //ID가 같은사람이 있는지 검사
            where: {
                email: req.body.email,
            }
        })
        if (exUser) {
            return res.status(403).send('이미 사용 중인 아이디 입니다');
        }

        const exUser2 = await User.findOne({ //nickname이 같은 사람이 있는지 검사
            where: {
                nickname: req.body.nickname,
            }
        })
        if (exUser2) {
            return res.status(403).send('이미 사용 중인 닉네임 입니다');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({ //await 안넣어주면, 비동기이기 때문에, 뒤에 res.json()이 먼저실행될수도있음.
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        })
        res.status(200).send('ok')
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
            });
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
})

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
})

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: 'http://localhost:3000',
}), (req, res) => {
   return res.redirect("http://localhost:3000")
});
module.exports = router;

