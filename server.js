const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();
// const DB = require("./config/connection")
const mysql = require("mysql2");

// connect to database

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.mySQLPASSWORD,
    database: "grocerystoreinventory",
  },
  console.log("connected to the inventory database")
);

// db.query("SELECT * from inventory", (err, row) => {
//   console.log(row);
// });

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening to server on ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

// all inventory
app.get("/api/inventory", (req, res) => {
  const sql = `SELECT * FROM inventory`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// single inventory by ID
app.get("/api/inventory/:id", (req, res) => {
  const sql = `SELECT * FROM inventory WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: row });
  });
});
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
