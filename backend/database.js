require("dotenv").config();
const {MongoClient, ServerApiVersion} = require("mongodb"); //import 
const uri = process.env.DB_URI || "mongodb://localhost:27017"; //db url

//default mongodb settings
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
};

let client;
const connectToMongoDB = async () => {
    if (!client) {
        try {//try to connect using uri and options
            client = await MongoClient.connect(uri, options);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.log(error);
        }
    }
    return client;
};

const getConnectedClient = () => client;

module.exports = {connectToMongoDB, getConnectedClient};