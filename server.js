const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: false
}));

app.use("/auth", require("./routes/authRoutes"));
app.use("/teams", require("./routes/teamRoutes"));

app.use(require("./middleware/errorMiddleware"));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
