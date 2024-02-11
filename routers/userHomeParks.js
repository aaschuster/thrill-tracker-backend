const express = require("express");
const router = express.Router();

const UserHomeParks = require("../models/userHomeParks");

router.get("/:userID", (req, res, next) => {
    UserHomeParks.get(req.params.userID)
        .then( homeParks => res.json(homeParks) )
        .catch(next);
})

router.post("/", (req, res, next) => {
    UserHomeParks.insert(req.body)
        .then( id => res.json(id))
        .catch(next);
})

router.delete("/:id", (req, res, next) => {
    UserHomeParks.del(req.params.id)
        .then( numDeleted => res.json(numDeleted))
        .catch(next);
})

module.exports = router;