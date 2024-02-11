const express = require("express");
const router = express.Router();

const UserParkFavorites = require("../models/userParkFavorites");

router.get("/:userID", (req, res, next) => {
    UserParkFavorites.get(req.params.userID)
        .then( parkFavorites => res.json(parkFavorites) )
        .catch(next);
})

router.post("/", (req, res, next) => {
    UserParkFavorites.insert(req.body)
        .then( id => res.json(id))
        .catch(next);
})

router.delete("/:id", (req, res, next) => {
    UserParkFavorites.del(req.params.id)
        .then( numDeleted => res.json(numDeleted))
        .catch(next);
})

module.exports = router;