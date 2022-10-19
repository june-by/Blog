const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const hpp = require("hpp");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const db = require("./models");
const postRouter = require("./src/Post/postRouter");
const postsRouter = require("./src/Posts/postsRouter");
const userRouter = require("./src/User/userRouter");
const visitorRouter = require("./src/Visitor/visitorRouter");
const commentRouter = require("./src/Comment/commentRouter");
const tagRouter = require("./src/Tag/tagRouter");
const passportConfig = require("./passport");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(cors({ origin: true, credentials: true }));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    proxy: true,
    cookie: {
      httpOnly: true, //cookie는 javascript로 조작할 수 없도록.
      secure: true,
      domain: process.env.NODE_ENV === "production" && ".byjuun.com",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.set("trust proxy", 1);

app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);
app.use("/visitor", visitorRouter);
app.use("/comment", commentRouter);
app.use("/tag", tagRouter);

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "byjuun.com",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
});

app.use("/", express.static(path.join(__dirname, "uploads")));
app.post("/uploads", upload.single("img"), (req, res) => {
  res.status(200).json({
    uploaded: true,
    url: req.file.location,
  });
});

app.listen(3065, () => {
  console.log("서버 실행 중");
});
