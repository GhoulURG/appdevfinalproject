const express = require("express");
const router = express.Router();

const db = require("../db");
const auth = require("../middleware/authMiddleware");

// CREATE TEAM
router.post("/", auth, async (req, res) => {
    const { name } = req.body;
    const userId = req.session.user.id;

    const sql = "INSERT INTO teams (name, user_id) VALUES (?, ?)";
    const [result] = await db.query(sql, [name, userId]);

    res.json({ id: result.insertId, name });
});

// GET TEAMS
router.get("/", auth, async (req, res) => {
    const userId = req.session.user.id;

    const [rows] = await db.query(
        "SELECT * FROM teams WHERE user_id = ?",
        [userId]
    );

    res.json(rows);
});

module.exports = router;
