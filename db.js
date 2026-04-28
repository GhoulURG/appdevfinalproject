const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "GhoulURG1488::))",
    database: "pokemon_api",
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;
