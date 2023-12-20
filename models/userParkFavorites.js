const db = require("../data/dbconfig");

module.exports.get = () => {
    return db("user_park_favorites");
}

module.exports.insert = userParkFavorite => {
    return db("user_park_favorites").insert(userParkFavorite);
}

module.exports.del = id => {
    return db("user_park_favorites")
        .where("user_park_favorites_id", id)
        .del();
}