const mysql = require("mysql2");

module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Nxt3005F1",
  database: "ecom",
});
