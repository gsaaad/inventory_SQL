const mysql = require("mysql2");
require("dotenv").config();

// connect to database

db_name = "grocerystoreinventory";
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.mySQLPASSWORD,
    database: db_name,
  },
  console.log(`connected to the ${db_name} database`)
);

module.exports = db;
