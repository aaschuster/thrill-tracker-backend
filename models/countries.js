const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("countries").where("countries_id", id).first();
    }
    return db("countries")
}

module.exports.insert = newCountry => {
    return db("countries").insert(newCountry);
}