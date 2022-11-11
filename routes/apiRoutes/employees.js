const express = require("express");
const router = express.Router();
const inputCheck = require("../../utils/inputCheck");
const db = require("../../config/connection");

router.get("/employees", (req, res) => {
  const sql = `SELECT * from employees`;
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

router.get("/employees/:id", (req, res) => {
  const sql = `SELECT * FROM employees WHERE id = ?`;
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

router.post("/employees", ({ body }, res) => {
  // first_name VARCHAR(30) NOT NULL,
  // last_name VARCHAR(30) NOT NULL,
  // role_id INTEGER,
  // manager_id
  const errors = inputCheck(
    body,
    "first_name",
    "last_name",
    "role_id",
    "manager_id"
  );

  if (errors) {
    res.status(400).json({ errors: errors });
    return;
  }

  const sql = `INSERT INTO employees(first_name, last_name, role_id, manager_id), VALUES(?,?,?,?)`;

  const params = [body.name, body.description];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: body });
  });
});

router.delete("/employees/:id", (req, res) => {
  const sql = `DELETE FROM employees WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "employee not found",
      });
    } else {
      res.json({
        message: "deleted employee",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

router.put("/employees/firstname/:id", (req, res) => {
  const sql = `UPDATE employees SET first_name = ? WHERE id = ?`;

  const params = [req.body.first_name, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "employee not found" });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});
router.put("/employees/lastname/:id", (req, res) => {
  const sql = `UPDATE employees SET last_name = ? WHERE id = ?`;

  const params = [req.body.last_name, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "employee not found" });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});
router.put("/employees/role/:id", (req, res) => {
  const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;

  const params = [req.body.role_id, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "employee not found" });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});
router.put("/employees/manager/:id", (req, res) => {
  const sql = `UPDATE employees SET manager_id = ? WHERE id = ?`;

  const params = [req.body.manager_id, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "employee not found" });
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
