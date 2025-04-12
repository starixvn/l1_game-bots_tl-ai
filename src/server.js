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

// Skip database connection if skipDatabase is true
if (!config.skipDatabase) {
  configureDatabase(config.database);
}

// Modify log endpoints to handle no database connection
app.get("/log", (req, res) => {
  if (config.skipDatabase) {
    res.json({ logs: [], message: "Database connection skipped" });
    return;
  }
  getLogs(req, res);
});

app.post("/log", (req, res) => {
  if (config.skipDatabase) {
    res.json({ success: true, message: "Database connection skipped" });
    return;
  }
  insertLog(req, res);
});

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  if (config.skipDatabase) {
    console.log("Database connection skipped");
  }
});
