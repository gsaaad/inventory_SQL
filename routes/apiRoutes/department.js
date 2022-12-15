const express = require("express");
const router = express.Router();
const db = require("../../config/connection");
const inputCheck = require("../../utils/inputCheck");

// get all departments
router.get("/departments", (req, res) => {
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
router.get("/departments/:id", (req, res) => {
  const sql = "SELECT * FROM departments WHERE id = ?";
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
router.post("/departments", ({ body }, res) => {
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
router.delete("/departments/:id", (req, res) => {
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

// update department name
router.put("/departments/name/:id", (req, res) => {
  const sql = `UPDATE departments SET name = ? WHERE id = ?`;

  const params = [req.body.name, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "Department not found" });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

// update department description
router.put("/departments/description/:id", (req, res) => {
  const sql = `UPDATE departments SET description = ? WHERE id = ?`;

  const params = [req.body.description, req.params.id];
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
