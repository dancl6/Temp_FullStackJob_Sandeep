//Require necessary modules and directories
const express = require('express');
const routes = require('./controllers');
const path = require('path');
const app = express();
const db = require('./db');

const PORT = 3002;

// Add express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Open database on local server 
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });