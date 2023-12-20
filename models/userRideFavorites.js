const db = require("../data/dbconfig");

module.exports.get = () => {
    return db("user_ride_favorites");
}

module.exports.insert = userRideFavorite => {
    return db("user_ride_favorites").insert(userRideFavorite);
}

module.exports.del = id => {
    return db("user_ride_favorites")
        .where("user_ride_favorites_id", id)
        .del();
}