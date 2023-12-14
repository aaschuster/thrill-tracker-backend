const db = require("../data/dbconfig");

module.exports.get = () => {
    return db("rides_ride_types");
}

module.exports.insert = ridesRideType => {
    return db("rides_ride_types").insert(ridesRideType);
}

module.exports.del = id => {
    return db("rides_ride_types").where("rides_ride_types", id).del();
}