const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "zattwine",
  database: "basic_node",
});

module.exports = pool.promise();
