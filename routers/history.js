const express = require("express");
const router = express.Router();

const History = require("../models/history");

router.get("/:id", (req, res, next) => {
    History.get(req.params.id)
        .then( record => res.json(record))
        .catch(next);
})

router.get("/", (req, res, next) => {
    History.getBy({ users_id: req.session.user.users_id })
        .then( records => res.json(records))
        .catch(next);
})

router.post("/", (req, res, next) => {

    const record = req.body;
    
    History.insert({...record, users_id: req.session.user.users_id})
        .then( recordID => res.json(recordID))
        .catch(next);
})

router.delete("/:id", (req, res, next) => {
    History.del(req.params.id)
        .then( numDeleted => res.json(numDeleted))
        .catch(next);
})

router.put("/:id", (req, res, next) => {
    History.update(req.body, req.params.id)
        .then( numUpdated => res.json(numUpdated))
        .catch(next);
})

module.exports = router;