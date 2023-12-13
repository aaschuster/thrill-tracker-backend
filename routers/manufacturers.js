const express = require("express");
const router = express.Router();

const Manufacturers = require("../models/manufacturers");

router.get("/", (req, res, next) => {
    Manufacturers.get()
        .then( manufacturers => res.json(manufacturers))
        .catch(next);
})

router.post("/", (req, res, next) => {
    Manufacturers.insert(req.body)
        .then( manufacturerID => res.json(manufacturerID))
        .catch(next);
})

module.exports = router;