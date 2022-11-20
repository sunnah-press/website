const { MongoClient } = require("mongodb");

require("dotenv").config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = client.db("hadits");
const collectionBukhari = database.collection("bukhari");

module.exports = { collectionBukhari, client };
