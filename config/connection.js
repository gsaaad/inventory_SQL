const mysql = require("mysql2");
require("dotenv").config();

// connect to database

const DB = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.mySQLPASSWORD,
    database: "inventory",
  },
  console.log("connected to the inventory database")
);

export default DB;
