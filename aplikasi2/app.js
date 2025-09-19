// app.js
const express = require('express');
const app = express();
const port = 3000;

// Route GET
app.get('/', (req, res) => {
  res.send('Hello, GET request!');
});

// Middleware untuk parsing body request
app.use(express.json());

// Route POST
app.post('/submit', (req, res) => {
  const { name, npm,jeniskelamin } = req.body;
  res.send(`Hello, ${name} dengan NPM ${npm}. Apakah Kamu ${jeniskelamin}?`);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});