// module imports
const express = require('express');
const sqlite3 = require('sqlite3');
const router = express.Router();

// use json format for req body
app.use(bodyParser.json())

// connect to db
const db = new sqlite3.Database('./Chinook_Sqlite_AutoIncrementPKs.sqlite');

sequelize = new Sequelize('Music', 'jerquan', null, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Chinook_Sqlite_AutoIncrementPKs.sqlite'
  });

  db.each(`SELECT * from Artist LIMIT 100`, (err, row) => {
    if (err) throw err;
    console.log(row);
  });
  
  db.close();
  module.exports = router;