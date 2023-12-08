const express = require("express");
const router = express.Router();

const Parks = require("../models/parks");

router.get("/", (req, res, next) => {
    Parks.get()
        .then( parks => res.json(parks))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    Parks.get(req.params.id)
        .then( park => res.json(park))
        .catch(next);
})

router.post("/", (req, res, next) => {
    Parks.insert(req.body)
        .then( parkID => res.json(parkID))
        .catch(next);
})

router.put("/:id", (req, res, next) => {
    Parks.update(req.body, req.params.id)
        .then( numUpdated => res.json(numUpdated))
        .catch(next);
})

module.exports = router;