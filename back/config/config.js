const dotenv = require('dotenv');
dotenv.config();

module.exports={
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "Byjuun.com",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "Byjuun.com",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
