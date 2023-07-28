"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("https"));
var fs_1 = __importDefault(require("fs"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var express_session_1 = __importDefault(require("express-session"));
var cors_1 = __importDefault(require("cors"));
var passport_1 = __importDefault(require("passport"));
var hpp_1 = __importDefault(require("hpp"));
var helmet_1 = __importDefault(require("helmet"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var models_1 = __importDefault(require("../models"));
var postRouter_1 = __importDefault(require("../src/Post/postRouter"));
var postsRouter_1 = __importDefault(require("../src/Posts/postsRouter"));
var userRouter_1 = __importDefault(require("../src/User/userRouter"));
var visitorRouter_1 = __importDefault(require("../src/Visitor/visitorRouter"));
var commentRouter_1 = __importDefault(require("../src/Comment/commentRouter"));
var tagRouter_1 = __importDefault(require("../src/Tag/tagRouter"));
var passport_2 = __importDefault(require("./passport"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var multer_1 = __importDefault(require("multer"));
var multer_s3_1 = __importDefault(require("multer-s3"));
dotenv_1.default.config();
function default_1() {
    var app = (0, express_1.default)();
    models_1.default.sequelize
        .sync()
        .then(function () {
        console.log("db연결 성공");
    })
        .catch(function (err) {
        console.error(err);
    });
    (0, passport_2.default)();
    if (process.env.NODE_ENV === "production") {
        app.use((0, morgan_1.default)("combined"));
        app.use((0, hpp_1.default)());
        app.use((0, helmet_1.default)());
    }
    else {
        app.use((0, morgan_1.default)("dev"));
    }
    app.use((0, cors_1.default)({ origin: true, credentials: true }));
    app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
    app.use(express_1.default.json({ limit: "50mb" }));
    app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
    app.use((0, express_session_1.default)({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        proxy: true,
        cookie: {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            domain: process.env.NODE_ENV === "production" ? ".byjuun.com" : ".local.byjuun.com",
        },
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    app.set("trust proxy", 1);
    app.use("/post", postRouter_1.default);
    app.use("/posts", postsRouter_1.default);
    app.use("/user", userRouter_1.default);
    app.use("/visitor", visitorRouter_1.default);
    app.use("/comment", commentRouter_1.default);
    app.use("/tag", tagRouter_1.default);
    aws_sdk_1.default.config.update({
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        region: process.env.S3_REGION,
    });
    var upload = (0, multer_1.default)({
        storage: (0, multer_s3_1.default)({
            s3: new aws_sdk_1.default.S3(),
            bucket: "byjuun.com",
            key: function (req, file, cb) {
                cb(null, "original/".concat(Date.now(), "_").concat(path_1.default.basename(file.originalname)));
            },
        }),
    });
    app.use("/", express_1.default.static(path_1.default.join(__dirname, "uploads")));
    app.post("/uploads", upload.single("img"), function (req, res) {
        res.status(200).json({
            uploaded: true,
            url: req.file.location,
        });
    });
    app.listen(3065, function () {
        console.log("서버 실행 중");
    });
    if (process.env.NODE_ENV !== "production") {
        var options = {
            key: fs_1.default.readFileSync("./ssl/key.pem"),
            cert: fs_1.default.readFileSync("./ssl/cert.pem"),
        };
        https_1.default.createServer(options, app).listen(8080, function () {
            console.log("HTTPS server started on port 8080");
        });
    }
}
exports.default = default_1;
