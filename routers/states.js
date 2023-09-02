const express = require("express");
const router = express.Router();

const States = require("../models/states");

router.get("/", (req, res, next) => {
    States.get()
        .then( states => res.json(states))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    States.get(req.params.id)
        .then( state => res.json(state))
        .catch(next);
})

module.exports = router;