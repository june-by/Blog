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

export const sequelizeInstance = new Sequelize(
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
  User: userModel(sequelizeInstance, Sequelize),
  Post: postModel(sequelizeInstance, Sequelize),
  Tag: tagModel(sequelizeInstance, Sequelize),
  Visitor: visitorModel(sequelizeInstance, Sequelize),
  Series: seriesModel(sequelizeInstance, Sequelize),
  Snippet: snippetModel(sequelizeInstance, Sequelize),
  sequelize: sequelizeInstance,
  Sequelize: Sequelize,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
