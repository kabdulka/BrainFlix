require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3456;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM `warehouse`", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("results: ", results);
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
