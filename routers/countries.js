const express = require("express");
const router = express.Router();

const Countries = require("../models/countries");

router.get("/", (req, res, next) => {
    Countries.get()
        .then( countries => res.json(countries))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    Countries.get(req.params.id)
        .then( country => res.json(country))
        .catch(next);
})

module.exports = router;