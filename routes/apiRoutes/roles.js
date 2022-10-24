const express = require("express");
const router = express.Router();
const db = require("../../config/connection");
const inputCheck = require("../../utils/inputCheck");

// get all roles and join with departments
router.get("/roles", (req, res) => {
  const sql = `SELECT * FROM roles.*, departments.name
                AS department_name
                FROM roles
                LEFT JOIN departments
                ON roles.department = departments.id`;

  db.query(sql, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// get single role
router.get("/roles/:id", (req, res) => {
  const sql = `SELECT roles.*, departments.name
                AS department_name
                FROM roles
                LEFT JOIN departments
                ON roles.department = departments.id
                WHERE roles.id = ?`;
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

// delete role
router.delete("/roles/:id", (req, res) => {
  const sql = `DELETE FROM roles WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "ROLE NOT FOUND",
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

// create role
router.post("/roles", ({ body }, res) => {
  const errors = inputCheck(body, "title", "salary", "department");
  if (errors) {
    res.status(400).json({
      errors: errors,
    });
    return;
  }
  const sql = "INSERT INTO roles (title, salary, department) VALUES(?,?,?)";
  const params = [body.title, body.salary, body.department];
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

// update role salary
router.put("/roles/:id", (req, res) => {
  const sql = "UPDATE roles SET salary = ? WHERE id = ?";

  const params = [req.body.salary, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "Role not found" });
    } else {
      res.json({
        message: "Success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});
