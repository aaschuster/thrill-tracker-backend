const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("manufacturers").where("manufacturers_id", id).first();
    }
    return db("manufacturers")
}