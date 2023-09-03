const cors = require("cors");

const express = require("express");
const server = express();
server.use(express.json());
server.use(cors());

const parksRouter = require("./routers/parks");
server.use("/parks", parksRouter);

const chainsRouter = require("./routers/chains");
server.use("/chains", chainsRouter);

const countriesRouter = require("./routers/countries");
server.use("/countries", countriesRouter);

const statesRouter = require("./routers/states");
server.use("/states", statesRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: "There was an issue with the server",
        message: err.message
    })
})

module.exports = server;