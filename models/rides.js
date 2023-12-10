const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("rides").where("rides_id", id).first();
    }
    return db("rides")
}

module.exports.insert = newRide => {
    return db("rides").insert(newRide);
}