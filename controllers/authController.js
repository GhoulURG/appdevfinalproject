const bcrypt = require("bcrypt");
const db = require("../db");

exports.register = async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await db.query(
        "INSERT INTO users (username, password_hash) VALUES ($1, $2)",
        [username, hash]
    );

    res.json({ message: "User created" });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const result = await db.query(
        "SELECT * FROM users WHERE username=$1",
        [username]
    );

    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    req.session.userId = user.id;

    res.json({ message: "Logged in" });
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.json({ message: "Logged out" });
};
