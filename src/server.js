const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const path = require("path");
const config = require("./config");
const configureDatabase = require("./database");
const { insertLog, getLogs } = require("./log/routers");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
configureDatabase(config.database);

app.get("/log", (req, res) => {
  getLogs(req, res);
});
app.post("/log", (req, res) => {
  insertLog(req, res);
});

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
