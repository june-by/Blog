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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const Tables = {
    Visitors: models_1.Visitors,
    Posts: models_1.Posts,
    Series: models_1.Series,
    Snippets: models_1.Snippets,
    Tags: models_1.Tags,
    Users: models_1.Users,
    PostHashtag: models_1.PostHashtag,
};
function syncDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, models_1.initPosts)();
        (0, models_1.initSeries)();
        (0, models_1.initTags)();
        (0, models_1.initUsers)();
        (0, models_1.initSnippets)();
        (0, models_1.initPostHashTag)();
        (0, models_1.initVisitors)();
        models_1.Posts.belongsTo(models_1.Series);
        models_1.Series.hasMany(models_1.Posts);
        models_1.Posts.belongsToMany(models_1.Tags, { through: models_1.PostHashtag });
        models_1.Tags.belongsToMany(models_1.Posts, { through: models_1.PostHashtag });
        for (const [key, table] of Object.entries(Tables)) {
            yield table
                .sync()
                .then(() => {
                console.log(`Sync ${key} Table Complete`);
            })
                .catch((err) => {
                console.log(`Error occured while Sync ${key} Table`);
            });
        }
    });
}
exports.default = syncDatabase;
