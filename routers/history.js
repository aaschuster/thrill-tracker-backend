const express = require("express");
const router = express.Router();

const History = require("../models/history");

router.get("/", (req, res, next) => {
    History.get()
        .then( history => res.json(history))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    History.get(req.params.id)
        .then( record => res.json(record))
        .catch(next);
})

router.post("/", (req, res, next) => {

    const record = req.body;
    
    History.insert(record)
        .then( recordID => res.json(recordID))
        .catch(next);
})

module.exports = router;