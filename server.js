const express = require("express");
const inputCheck = require("./utils/inputCheck");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/connection");
const mysql = require("mysql2");

// connect to database

// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     user: "root",
//     password: process.env.mySQLPASSWORD,
//     database: "grocerystoreinventory",
//   },
//   console.log("connected to the inventory database")
// );

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
  const sql = `SELECT inventory.*, departments.name
                As department_name
                FROM inventory
                LEFT JOIN departments
                ON inventory.department = departments.id`;
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
  // const sql = `SELECT * FROM inventory WHERE id = ?`;
  const sql = `SELECT inventory.*, departments.name
                AS department_name
                FROM inventory
                LEFT JOIN departments
                ON inventory.department = departments.id
                WHERE inventory.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: row });
  });
});

// get all departments
app.get("/api/departments", (req, res) => {
  const sql = "SELECT * FROM departments";
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

// get department by id
app.get("/api/departments/:id", (req, res) => {
  const sql = "SELECT * from departments WHERE id = ?";
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});
app.post("/api/departments", ({ body }, res) => {
  const errors = inputCheck(body, "name", "description");

  if (errors) {
    res.status(400).json({ errors: errors });
    return;
  }

  const sql = "INSERT INTO departments(name,description) VALUES(?,?)";

  const params = [body.name, body.description];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: body });
  });
});
// delete department by id
app.delete("/api/departments/:id", (req, res) => {
  const sql = "DELETE FROM departments WHERE id = ?";
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "department not found",
      });
    } else {
      res.json({
        message: "deleted department",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
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
//update inventory to SET price
app.put("/api/inventory/price/:id", (req, res) => {
  const sql = "UPDATE inventory SET price = ? WHERE id = ?";

  const params = [req.body.price, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "Inventory not found" });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});
//update inventory to SET qty
app.put("/api/inventory/qty/:id", (req, res) => {
  const sql = "UPDATE inventory SET qty = ? WHERE id = ?";

  const params = [req.body.qty, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "Inventory not found" });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

//update inventory to SET family
app.put("/api/inventory/family/:id", (req, res) => {
  const sql = "UPDATE inventory SET family = ? WHERE id = ?";

  const params = [req.body.family, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "Inventory not found" });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
