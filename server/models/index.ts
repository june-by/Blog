import { Sequelize } from "sequelize";
import postModel from "./post";
import userModel from "./user";
import tagModel from "./tag";
import visitorModel from "./visitor";
import seriesModel from "./series";
import snippetModel from "./snippet";
import { dbConfig } from "config/config";

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);
interface DB {
  [key: string]: any;
}
const db: DB = {
  User: userModel(sequelize, Sequelize),
  Post: postModel(sequelize, Sequelize),
  Tag: tagModel(sequelize, Sequelize),
  Visitor: visitorModel(sequelize, Sequelize),
  Series: seriesModel(sequelize, Sequelize),
  Snippet: snippetModel(sequelize, Sequelize),
  sequelize: sequelize,
  Sequelize: Sequelize,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
