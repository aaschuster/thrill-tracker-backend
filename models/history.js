const db = require("../data/dbconfig");

module.exports.get = id => {
    if(id) {
        return db("history").where("history_id", id).first();
    }
    return db("history");
}

module.exports.getBy = filter => {
    return db("history").where(filter);
}

module.exports.insert = record => {
    return db("history").insert(record);
}

module.exports.del = id => {
    return db("history").where("history_id", id).del();
}

module.exports.update = (record, id) => {
    return db("history").where("history_id", id).update(record);
}