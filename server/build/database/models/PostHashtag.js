"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPostHashTag = exports.PostHashtag = void 0;
const SequelizeConnection_1 = require("../SequelizeConnection");
exports.PostHashtag = SequelizeConnection_1.sequelizeConnection.define("PostHashtag", {});
const initPostHashTag = () => {
    exports.PostHashtag.init({}, {
        sequelize: SequelizeConnection_1.sequelizeConnection,
        tableName: "PostHashtag",
        timestamps: true,
    });
};
exports.initPostHashTag = initPostHashTag;
