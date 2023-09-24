const cors = require("cors");
const session = require("express-session");
const Store = require("connect-session-knex")(session);
const express = require("express");

const sessionConfig = {
    name: "user",
    secret: process.env.SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, //30days
        secure: false,
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
    store: new Store({
        knex: require("./data/dbconfig"),
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 1000 * 60 * 60 * 24 * 15 //15days
      })
};

const server = express();
server.use(express.json());
server.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
server.use(session(sessionConfig));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

const parksRouter = require("./routers/parks");
server.use("/parks", parksRouter);

const chainsRouter = require("./routers/chains");
server.use("/chains", chainsRouter);

const countriesRouter = require("./routers/countries");
server.use("/countries", countriesRouter);

const statesRouter = require("./routers/states");
server.use("/states", statesRouter);

const ridesRouter = require("./routers/rides")
server.use("/rides", ridesRouter);

const historyRouter = require("./routers/history")
server.use("/history", historyRouter);

const usersRouter = require("./routers/users");
server.use("/users", usersRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: "There was an issue with the server",
        message: err.message
    })
})

module.exports = server;