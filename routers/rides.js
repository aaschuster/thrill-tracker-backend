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

module.exports = router;