const bcrypt = require("bcrypt");
const db = require("../db");

exports.register = async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";

    db.query(sql, [username, hash])
        .then(() => {
            res.json({ message: "User created" });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};
