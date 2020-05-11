const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();
const router = require("../router");
server.use(express.json());
server.use("/api/accounts", logger, router);

server.get("/", (req, res) => {
  res.send(`<h2>This is the message for a general server get request</h2>`);
});

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
