const express = require("express");
const router = express.Router();
const db = require("../../config/connection");
const inputCheck = require("../../utils/inputCheck");

router.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

// all inventory
router.get("/inventory", (req, res) => {
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
router.get("/inventory/:id", (req, res) => {
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

// delete inventory
router.delete("/inventory/:id", (req, res) => {
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
router.post("/inventory", ({ body }, res) => {
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
router.put("/inventory/price/:id", (req, res) => {
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
router.put("/inventory/qty/:id", (req, res) => {
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
router.put("/inventory/family/:id", (req, res) => {
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

module.exports = router;
