const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Coucou");
});

app.listen(port);