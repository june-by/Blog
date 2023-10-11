import { Sequelize } from "sequelize";
import { dbConfig } from "config/config";
import { Posts } from "./post";
import { Series } from "./series";
import { Tags } from "./tag";
import initPostModel from "./postInit";
import initSerieModel from "./seriesInit";
import initSnippetModel from "./snippetInit";
import initTagModel from "./tagInit";
import initUserModel from "./userInit";

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

export const sequelizeConnection = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

function initModel() {
  initPostModel();
  initSerieModel();
  initSnippetModel();
  initTagModel();
  initUserModel();

  Posts.belongsTo(Series);
  Series.hasMany(Posts);
  Posts.belongsToMany(Tags, { through: "PostHashtag" });
  Tags.belongsToMany(Posts, { through: "PostHashtag" });
}

initModel();
