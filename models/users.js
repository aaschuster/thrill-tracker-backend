const db = require("../data/dbconfig");

module.exports.getBy = filter => {
    return db("users").where(filter);
}

module.exports.insert = user => {
    return db("users").insert(user);
}

module.exports.update = (user, id) => {
    return db("users").where("users_id", id).update(user);
}

module.exports.del = id => {
    return db("users").where("users_id", id).del();
}