const express = require("express");
const db = require("../data/dbConfig.js");
const server = express();
const accountsRouter = require("../data/accountsRouter.js");

server.use(express.json());
server.use("/accounts", accountsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>It's alive!!!</h2>`);
});

module.exports = server;
