const mongoose = require("mongoose");
// const{dbHost, dbPass, dbName, dbPort, dbUser} = require("../app/config");

mongoose.connect(`mongodb://portalfreelance:portalfreelancekadek@ac-t2xxtzb-shard-00-00.gder6n7.mongodb.net:27017,ac-t2xxtzb-shard-00-01.gder6n7.mongodb.net:27017,ac-t2xxtzb-shard-00-02.gder6n7.mongodb.net:27017/test?replicaSet=atlas-a9nhqv-shard-0&ssl=true&authSource=admin`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));

module.exports = db;