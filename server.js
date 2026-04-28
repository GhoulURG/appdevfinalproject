const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

// SESSION
app.use(session({
    secret: "pokemon_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 }
}));

// ROUTES
app.use("/auth", require("./routes/authRoutes"));
app.use("/teams", require("./routes/teamRoutes"));

// DB TEST
const db = require("./db");

db.query("SELECT 1")
    .then(() => console.log("✔ DATABASE CONNECTED"))
    .catch(err => console.log("❌ DB ERROR:", err));

// START SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
