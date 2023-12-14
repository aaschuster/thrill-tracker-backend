const express = require("express");
const router = express.Router();

const Rides = require("../models/rides");

router.get("/", (req, res, next) => {
    Rides.get()
        .then( rides => res.json(rides))
        .catch(next);
})

router.get("/:id", (req, res, next) => {
    Rides.get(req.params.id)
        .then( ride => res.json(ride))
        .catch(next);
})

router.post("/", (req, res, next) => {
    Rides.insert(req.body)
        .then( rideID => res.json(rideID) )
        .catch(next);
})

router.put("/:id", (req, res, next) => {
    Rides.update(req.body)
        .then( numUpdated => res.json(numUpdated))
        .catch(next);
})

module.exports = router;