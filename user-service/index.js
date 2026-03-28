const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
    res.json({ message: "User logged in" });
});

app.post("/signup", (req, res) => {
    res.json({ message: "User signed up" });
});

app.listen(3001, "0.0.0.0" , () => {
    console.log("User Service running on port 3001");
});