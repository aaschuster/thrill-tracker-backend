const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("states").where("states_id", id).first();
    }
    return db("states")
}