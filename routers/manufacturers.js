const express = require("express");
const router = express.Router();

const Manufacturers = require("../models/manufacturers");

router.get("/", (req, res, next) => {
    Manufacturers.get()
        .then( manufacturers => res.json(manufacturers))
        .catch(next);
})

module.exports = router;