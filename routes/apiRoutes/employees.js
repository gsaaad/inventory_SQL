const express = require("express");
const router = express.Router();
const inputCheck = require("../../utils/inputCheck");
const db = require("../../config/connection");

router.get("/employees", (req, res) => {
  const sql = "SELECT * FROM employees";

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
  const sql = "SELECT * FROM employees WHERE id = ?";
  const params = [req.params.id];

  db.query(sql, params, (err, rows) => {
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

router.post("employees", ({ body }, res) => {
  // check input first before posting
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
  const sql =
    "INSERT INTO employees(first_name,last_name,role_id,manager_id) VALUES (?,?,?,?";

  const params = [body.name, body.description];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "success", data: body });
  });
});

module.exports = router;
