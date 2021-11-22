const express = require("express");
const UserController  = require("./controllers/userController");
const app = express();

const bodyParser = express.json();

const cors = require("cors");

app.use(bodyParser);

app.post("/user", UserController.createUser);

app.use(cors());

module.exports = app;
