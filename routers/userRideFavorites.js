const express = require("express");
const router = express.Router();

const UserRideFavorites = require("../models/userRideFavorites");

router.get("/:userID", (req, res, next) => {
    UserRideFavorites.get(req.params.userID)
        .then( rideFavorites => res.json(rideFavorites))
        .catch(next);
})

router.post("/", (req, res, next) => {
    UserRideFavorites.insert(req.body)
        .then( id => res.json(id))
        .catch(next);
})

router.delete("/:id", (req, res, next) => {
    UserRideFavorites.del(req.params.id)
        .then( numDeleted => res.json(numDeleted))
        .catch(next);
})

module.exports = router;