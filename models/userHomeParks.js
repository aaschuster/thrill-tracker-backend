const db = require("../data/dbconfig");

module.exports.get = userID => {
    return db("user_home_parks").where("users_id", userID);
}

module.exports.insert = userHomePark => {
    return db("user_home_parks").insert(userHomePark);
}

module.exports.del = id => {
    return db("user_home_parks")
        .where("user_home_parks_id", id)
        .del();
}