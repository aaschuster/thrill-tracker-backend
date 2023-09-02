const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("parks").where("parks_id", id).first();
    }
    return db("parks")
}