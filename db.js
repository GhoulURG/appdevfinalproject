const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "pokemon_api",
    password: "yourpassword",
    port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};
