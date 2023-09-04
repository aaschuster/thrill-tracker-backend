const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("history").where("history_id", id).first();
    }
    return db("history");
}

module.exports.insert = record => {
    return db("history").insert(record);
}