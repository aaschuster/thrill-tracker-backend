const db = require("../data/dbconfig");

module.exports.get = userID => {
    return db("user_park_favorites").where("users_id", userID);
}

module.exports.insert = userParkFavorite => {
    return db("user_park_favorites").insert(userParkFavorite);
}

module.exports.del = id => {
    return db("user_park_favorites")
        .where("user_park_favorites_id", id)
        .del();
}