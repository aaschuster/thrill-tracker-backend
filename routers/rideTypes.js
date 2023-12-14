const express = require("express");
const router = express.Router();

const RideTypes = require("../models/rideTypes");

router.get("/", (req, res, next) => {
    RideTypes.get()
        .then( rideTypes => res.json(rideTypes))
        .catch(next);
})

module.exports = router;