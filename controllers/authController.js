const bcrypt = require("bcrypt");
const db = require("../db");

// REGISTER
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";
        await db.query(sql, [username, hash]);

        res.json({ message: "User created" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// LOGIN
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await db.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );

        if (rows.length === 0) {
            return res.status(401).json({ error: "User not found" });
        }

        const user = rows[0];

        const match = await bcrypt.compare(password, user.password_hash);

        if (!match) {
            return res.status(401).json({ error: "Wrong password" });
        }

        req.session.user = {
            id: user.id,
            username: user.username
        };

        res.json({ message: "Logged in" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
