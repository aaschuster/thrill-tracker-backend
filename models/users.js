const db = require("../data/dbconfig");
const jwt = require("jsonwebtoken");

module.exports.getBy = filter => {
    return db("users").where(filter);
}


module.exports.insert = user => {
    return db("users").insert(user);
}

// module.exports.login = async user => {
//     try {
//         const token = jwt.sign(
//             {username: user.username},
//             process.env.JWT_KEY,
//             {expiresIn: "1h"}
//         );
//         return token;
//     }
//     catch (err) {
//         return [422, { message: err.message }];
//     }
// }

module.exports.update = (user, id) => {
    return db("users").where("users_id", id).update(user);
}

module.exports.del = id => {
    return db("users").where("users_id", id).del();
}