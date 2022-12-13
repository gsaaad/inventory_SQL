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
router.delete("/employees/:id", (req, res) => {
  const sql = "DELETE FROM employees WHERE id = ?";
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee is not found.. Check if id is valid",
      });
    } else {
      res.json({
        message: `Deleted Employee ID: ${params}`,
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});
// update employee email
// router.put("/employees/email:id", (req, res) => {
//   const sql = "UPDATE employee SET email = ? WHERE id = ?";

//   const params = [req.body.email, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({ message: "Employee not found.. Check if ID is valid" });
//     } else {
//       res.json({
//         message: `Successful update! Employee email was changed to${req.body.email} `,
//         data: req.body,
//         changes: result.affectedRows,
//       });
//     }
//   });
// });
router.put("/employees/role/:id", (req, res) => {
  const sql = "UPDATE employee SET role_id = ? WHERE id = ?";
  const params = [req.body.role_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "Employee not found... Check if ID is valid" });
    } else {
      res.json({
        message: `Successful Update! Employee ID ${req.params.id} role ID has been changed to ${req.body.role_id}`,
      });
    }
  });
});
router.put("/employees/manager/:id", (req, res) => {
  const sql = "UPDATE employee SET manager_id WHERE id = ?";
  const params = [req.body.manager_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({ message: "Employee ID was not found.. check if ID is valid" });
    } else {
      res.json({
        message: `Successful Update! Employee with ID ${req.params.id}'s  manager_id was changed to  ${req.body.manager_id}`,
      });
    }
  });
});

module.exports = router;
