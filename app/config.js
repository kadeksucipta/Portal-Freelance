const dotenv = require("dotenv");
const path = require("path");

// const url = "mongodb://kadeksucipta:kadeksucipta@ac-yu1ayca-shard-00-00.5c6405r.mongodb.net:27017,ac-yu1ayca-shard-00-01.5c6405r.mongodb.net:27017,ac-yu1ayca-shard-00-02.5c6405r.mongodb.net:27017/StudiKasusBE?ssl=true&replicaSet=atlas-e5y2u7-shard-0&authSource=admin&retryWrites=true&w=majority"

dotenv.config()


module.exports = {
    rootPath: path.resolve(__dirname, ".."),
    secretkey: process.env.SECRET_KEY,
    secretName: process.env.SECRET_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    mongoUri: process.env.MONGO_URI
};