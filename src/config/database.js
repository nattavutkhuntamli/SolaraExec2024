const mysql = require("mysql");
const address = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  charset: process.env.DB_CHARTSET,
};

const connection = mysql.createConnection(address);
module.exports = { connection };
