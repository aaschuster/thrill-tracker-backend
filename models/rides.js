const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("rides").where("rides_id", id).first();
    }
    return db("rides")
}