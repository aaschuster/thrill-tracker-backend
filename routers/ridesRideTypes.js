const express = require("express");
const router = express.Router();

const RidesRideTypes = require("../models/ridesRideTypes");

router.get("/", (req, res, next) => {
    RidesRideTypes.get()
        .then( ridesRideTypes => res.json(ridesRideTypes))
        .catch(next);
})

router.post("/", (req, res, next) => {
    RidesRideTypes.insert(req.body)
        .then( id => res.json(id))
        .catch(next);
})

router.delete("/:id", (req, res, next) => {
    RidesRideTypes.del(req.params.id)
        .then( numDeleted => res.json(numDeleted))
        .catch(next);
})

module.exports = router;