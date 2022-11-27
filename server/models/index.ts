import { Sequelize } from "sequelize";
import commentModel from "./comment";
import postModel from "./post";
import imageModel from "./image";
import userModel from "./user";
import tagModel from "./tag";
import visitorModel from "./visitor";
import { dbConfig } from "config/config";

const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];
// : { Comment: any; Image: any; Post: any; User: any; Tag: any; Visitor: any; sequelize: any; Sequelize: any }

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
  Comment: commentModel(sequelize, Sequelize),
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
