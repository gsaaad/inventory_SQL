const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

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
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
