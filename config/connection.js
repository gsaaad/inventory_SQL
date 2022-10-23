const mysql = require("mysql2");
require("dotenv").config();

// connect to database

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.mySQLPASSWORD,
    database: "grocerystoreinventory",
  },
  console.log("connected to the grocerystoreinventory database")
);

module.exports = db;
