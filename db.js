const { Pool } = require("pg");

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "pokemon_api",
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;

db.query("SELECT NOW()")
  .then(res => console.log(res.rows))
  .catch(err => console.error(err));
};
