const Users = require("./models/users");

module.exports.validateLogin = (req, res, next) => {
    const { username, password } = req.body;

    let message = "";

    if(!password || !password.trim()) message = "Please provide a password.";
    if(!username || !username.trim()) message = "Please provide a username.";

    if(message) return next({
        message: message,
        status: 422
    })

    next();
}

module.exports.validateUser = async (req, res, next) => {

    const { email, username } = req.body;

    let message = "";
    if(!username) message = "Please provide a username.";

    const userByEmail = await Users.getBy({email: email}).first();

    if(userByEmail) message = "That email is already in use.";

    const userByUsername = await Users.getBy({username: username}).first();

    if(userByUsername) message = "That username is already in use.";

    if(message) return next({
        message: message,
        status: 422
    })

    next();
}