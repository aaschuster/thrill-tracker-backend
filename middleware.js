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