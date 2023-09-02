const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("chains").where("chains_id", id).first();
    }
    return db("chains")
}