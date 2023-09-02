const express = require("express");
const router = express.Router();

const Chains = require("../models/chains");

router.get("/", (req, res, next) => {
    Chains.get()
        .then( chains => res.json(chains))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    Chains.get(req.params.id)
        .then( chain => res.json(chain))
        .catch(next);
})

module.exports = router;