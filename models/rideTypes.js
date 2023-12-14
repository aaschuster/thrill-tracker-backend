const db = require("../data/dbconfig");

module.exports.get = () => {
    return db("ride_types");
}