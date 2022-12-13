const express = require("express");
const inputCheck = require("./utils/inputCheck");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/connection");
const apiRoutes = require("./routes/apiRoutes");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(" /api", apiRoutes);

// app.listen(PORT, () => {
//   console.log(`Listening to server on ${PORT}`);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

db.connect((err) => {
  if (err) throw err;

  console.log("SQL database connected~!");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
