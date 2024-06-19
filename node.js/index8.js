const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/create", (req, res) => {
  res.send(`Hello World from USERS ${req.params.id} Route code`);
});

app.get("/read", (req, res) => {
  res.send("Hello World from USERS Route code");
});

app.put("/update", (req, res) => {
  res.send(`Hello World from STUDENTS ${req.params.id} Route code`);
});

app.delete("/delete", (req, res) => {
  res.send(`Hello World from STUDENTS ${req.params.id} Route code`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
