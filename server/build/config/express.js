"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const hpp_1 = __importDefault(require("hpp"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const _database_1 = require("../database");
const passport_2 = __importDefault(require("./passport"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const _constants_1 = require("../constants");
const _routes_1 = __importDefault(require("../routes"));
dotenv_1.default.config();
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        yield (0, _database_1.syncDatabase)();
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
        app.use((0, express_session_1.default)(_constants_1.SESSION_OPTIONS));
        app.use(passport_1.default.initialize());
        app.use(passport_1.default.session());
        app.set("trust proxy", 1);
        app.use("/test", (req, res, next) => {
            res.send("github action deploy test22");
        });
        _routes_1.default.forEach(({ url, router }) => {
            app.use(url, router);
        });
        aws_sdk_1.default.config.update({
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            region: process.env.S3_REGION,
        });
        const upload = (0, multer_1.default)({
            storage: (0, multer_s3_1.default)({
                s3: new aws_sdk_1.default.S3(),
                bucket: "byjuun.com",
                key(req, file, cb) {
                    cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
                },
            }),
        });
        app.use("/", express_1.default.static(path_1.default.join(__dirname, "uploads")));
        app.post("/uploads", upload.single("img"), (req, res) => {
            res.status(200).json({
                uploaded: true,
                url: req.file.location,
            });
        });
        yield _database_1.sequelizeConnection
            .authenticate()
            .then(() => __awaiter(this, void 0, void 0, function* () {
            console.log("connection success");
        }))
            .catch((e) => {
            console.log("TT : ", e);
        });
        app.listen(3065, () => {
            console.log("서버 실행 중");
        });
        if (process.env.NODE_ENV !== "production") {
            const options = {
                key: fs_1.default.readFileSync("./ssl/key.pem"),
                cert: fs_1.default.readFileSync("./ssl/cert.pem"),
            };
            https_1.default.createServer(options, app).listen(8080, () => {
                console.log(`HTTPS server started on port 8080`);
            });
        }
    });
}
exports.default = default_1;
