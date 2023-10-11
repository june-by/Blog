import { Sequelize } from "sequelize";
import { dbConfig } from "config/config";

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
