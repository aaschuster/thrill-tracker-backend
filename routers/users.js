const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

const Users = require("../models/users");
const {validateLogin, validateUser} = require("../middleware");

router.post("/login", validateLogin, async (req, res, next) => {

    const invalidCreds = {
        status: 401,
        message: "Invalid credentials"
    }

    let { username, password } = req.body;

    const token = await Users.login(req.body)

    Users.getBy({username: username})
        .then( ([user]) => {
            if(user && bcrypt.compareSync(password, user.password)) {
                req.session.user = user;
                res.status(200).json({
                    message: "Login successful",
                    user: user
                })
            }
            else next(invalidCreds)
        })
        .catch(next);
})

router.get("/current", (req, res, next) => {
    if(req.session.user) {
        res.json({ user: req.session.user })
    } else(res.json({ user: {} }))
})

router.get("/logout", (req, res, next) => {
    if(req.session.user) {
        req.session.destroy(err => {
            if(err) {
                res.json({ message: "There was an issue logging out."});
            } else {
                res.json({ message: "Logout successful."});
            }
        })
    } else {
        res.json({ message: "No user logged in."});
    }
})

router.post("/", validateUser, (req, res, next) => {

    let {username, password, email} = req.body;

    if(password)
        password = bcrypt.hashSync(password, 8);

    Users.insert({email: email, username: username, password: password})
        .then( userID => res.json(userID))
        .catch(next);
})

module.exports = router;