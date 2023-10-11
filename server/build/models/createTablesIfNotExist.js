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
const _1 = require("./");
const Tables = {
    Visitors: _1.Visitors,
    Posts: _1.Posts,
    Series: _1.Series,
    Snippets: _1.Snippets,
    Tags: _1.Tags,
    Users: _1.Users,
};
function createTablesIfNotExist() {
    return __awaiter(this, void 0, void 0, function* () {
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
exports.default = createTablesIfNotExist;
