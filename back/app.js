const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const multiparty = require('connect-multiparty');
const cors = require('cors');
const fs = require('fs');
const { v4 } = require('uuid');
const passport = require('passport');
const hpp =require('hpp');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./models');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const multipartyMiddelware = multiparty({ uploadDir: './images' });
const passportConfig = require('./passport');

const app = express();

db.sequelize.sync()
    .then(() => {
        console.log("db연결 성공");
    })
    .catch((err) => {
        console.error(err);
    })


passportConfig();

if(process.env.NODE_ENV === 'production'){
    app.use(morgan("combined"));
    app.use(hpp());
    app.use(helmet());
}else{
    app.use(morgan("dev"));
}

app.use(cors({
    origin: ['http://localhost:3000','http://byjuun.com'],
    credentials: true, //이걸 해줘야 cookie도 같이 보낼 수 있다.
}));

app.use(bodyparser.urlencoded({ extended: true,  limit:"50mb", }));
app.use(bodyparser.json({  limit:"50mb",}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session({
    saveUninitialized : false,
    resave : false,
    secret :process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
        domain : process.env.NODE_ENV === 'production' && '.byjuun.com'
    }
}));

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send("ㅎㅇ");
})

//이거 나중에 multer이용해서 받은거 디비에 저장하고... 그러고 게시물이랑 해줘야할듯?.....
//multer수업듣고나서 합시다.
//req.file.path에 /image/제목.jpeg 이런식으로 들어가있는데?
app.use('/',express.static(path.join(__dirname,'uploads')));
app.post('/uploads', multipartyMiddelware, (req, res) => {
    console.log("req files : ", req.files);
    const  TempFile = req.files.upload;
    const TempPathfile = TempFile.path;
    const targetPathUrl = path.join(__dirname,"./uploads/"+TempFile.name);

    fs.rename(TempPathfile,targetPathUrl,err=>{
        res.status(200).json({
            uploaded : true,
            url : "http://byjuun.com/"+TempFile.name
        });

        if(err) return console.err(err);
    });
})

app.listen(80, () => {
    console.log("서버 실행 중");
})