import { Sequelize } from "sequelize";
import postModel from "./post";
import imageModel from "./image";
import userModel from "./user";
import tagModel from "./tag";
import visitorModel from "./visitor";
import { dbConfig } from "config/config";

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
interface DB {
  [key: string]: any;
}
const db: DB = {
  Image: imageModel(sequelize, Sequelize),
  User: userModel(sequelize, Sequelize),
  Post: postModel(sequelize, Sequelize),
  Tag: tagModel(sequelize, Sequelize),
  Visitor: visitorModel(sequelize, Sequelize),
  sequelize: sequelize,
  Sequelize: Sequelize,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
