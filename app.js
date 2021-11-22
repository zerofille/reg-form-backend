const express = require("express");
const app = express;

const bodyParser = express.json();

const cors = require("cors");

app.use(bodyParser);

app.get("/users", async function (req, res, next) {});

app.use(cors());

module.exports = app;
