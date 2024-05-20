const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});


app.get('/message', (req, res) => {
  res.send(JSON.stringify({ message: 'request succeeded!' }));
});


app.listen(3000);
