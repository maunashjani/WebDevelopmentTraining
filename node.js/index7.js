const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send('Hello World from USERS Route code');
  });

  app.get('/users/:id', (req, res) => {
    res.send(`Hello World from USERS ${req.params.id} Route code`);
  });

  app.post('/students/:id', (req, res) => {
    res.send(`Hello World from STUDENTS ${req.params.id} Route code`);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});