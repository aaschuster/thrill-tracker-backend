const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

const Users = require("../models/users");
const {validateLogin} = require("../middleware");

router.post("/login", validateLogin, async (req, res, next) => {

    const invalidCreds = {
        status: 401,
        message: "Invalid credentials"
    }

    let { username, password } = req.body;

    const token = await Users.login(req.body)

    Users.getBy({username: username})
        .then( ([user]) => {
            if(bcrypt.compareSync(password, user.password)) return res.json({
                message: "Login successful",
                token: token
            })
            else next(invalidCreds)
        })
        .catch(next(invalidCreds));
})

router.post("/", (req, res, next) => {

    let {username, password, email} = req.body;

    if(password)
        password = bcrypt.hashSync(password, 8);

    Users.insert({email: email, username: username, password: password})
        .then( userID => res.json(userID))
        .catch(next);
})

module.exports = router;