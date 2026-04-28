const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(session({
    secret: "pokemon_secret",
    resave: false,
    saveUninitialized: false
}));

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/auth", require("./routes/authRoutes"));
app.use("/teams", require("./routes/teamRoutes"));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
