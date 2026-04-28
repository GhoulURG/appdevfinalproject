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
