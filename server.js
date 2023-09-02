const express = require("express");
const server = express();
server.use(express.json());

const parksRouter = require("./routers/parks");
server.use("/parks", parksRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: "There was an issue with the server",
        message: err.message
    })
})

module.exports = server;