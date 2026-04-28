const db = require("../db");

exports.createTeam = async (req, res) => {
    const { name } = req.body;

    const result = await db.query(
        "INSERT INTO teams (name, user_id) VALUES ($1, $2) RETURNING *",
        [name, req.session.userId]
    );

    res.json(result.rows[0]);
};

exports.getTeams = async (req, res) => {
    const result = await db.query(
        "SELECT * FROM teams WHERE user_id=$1",
        [req.session.userId]
    );

    res.json(result.rows);
};

exports.addPokemon = async (req, res) => {
    const { teamId } = req.params;
    const { pokemon_id, nickname } = req.body;

    const count = await db.query(
        "SELECT COUNT(*) FROM team_pokemon WHERE team_id=$1",
        [teamId]
    );

    if (parseInt(count.rows[0].count) >= 6) {
        return res.status(400).json({ error: "Team full (max 6)" });
    }

    const result = await db.query(
        `INSERT INTO team_pokemon (team_id, pokemon_id, nickname)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [teamId, pokemon_id, nickname]
    );

    res.json(result.rows[0]);
};

exports.deleteTeam = async (req, res) => {
    const { id } = req.params;

    await db.query(
        "DELETE FROM teams WHERE id=$1 AND user_id=$2",
        [id, req.session.userId]
    );

    res.json({ message: "Deleted" });
};
