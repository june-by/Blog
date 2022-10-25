import dotenv from "dotenv";
import { Dialect } from "sequelize";
dotenv.config();

interface DBConfig {
  [key: string]: { username: string; password: string; database: string; dialect: Dialect | undefined; host: string };
}

export const dbConfig: DBConfig = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD as string,
    database: "Byjuun.com",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD as string,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD as string,
    database: "Byjuun.com",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
