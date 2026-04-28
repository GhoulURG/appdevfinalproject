const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/teamController");
const { requireAuth } = require("../middleware/authMiddleware");

router.post("/", requireAuth, ctrl.createTeam);
router.get("/", requireAuth, ctrl.getTeams);
router.post("/:teamId/pokemon", requireAuth, ctrl.addPokemon);
router.delete("/:id", requireAuth, ctrl.deleteTeam);

module.exports = router;
