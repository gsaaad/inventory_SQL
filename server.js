const express = require("express");
const inputCheck = require("./utils/inputCheck");
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
// delete inventory
app.delete("/api/inventory/:id", (req, res) => {
  const sql = `DELETE FROM inventory WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "INVENTORY NOT FOUND",
      });
    } else {
      res.json({
        message: "Delete Successful",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});
// create inventory
app.post("/api/inventory", ({ body }, res) => {
  const errors = inputCheck(
    body,
    "code",
    "name",
    "qty",
    "price",
    "family",
    "inSTOCK"
  );

  if (errors) {
    res.status(400).json({ errors: errors });
    return;
  }
  const sql =
    "INSERT INTO inventory (code, name, qty, price, family, inSTOCK) VALUES(?,?,?,?,?,?)";

  const params = [
    body.code,
    body.name,
    body.qty,
    body.price,
    body.family,
    body.inSTOCK,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: "success",
      data: body,
    });
  });
});
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
