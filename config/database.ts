const { MongoClient } = require("mongodb");

export {};

require("dotenv").config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: false,
  ssl: true,
  tls: true,
});

const database = client.db("hadits");
const collectionBukhari = database.collection("bukhari");
const collectionAbudawud = database.collection("abudawud");
const collectionAhmad = database.collection("ahmad");
const collectionAllBook = database.collection("allbook");
const collectionDarimi = database.collection("darimi");
const collectionIbnumajah = database.collection("ibnumajah");
const collectionMalik = database.collection("malik");
const collectionMuslim = database.collection("muslim");
const collectionNasai = database.collection("nasai");
const collectionRiyadhus = database.collection("riyadhus");
const collectionSyafii = database.collection("syafii");
const collectionTirmidzi = database.collection("tirmidzi");

module.exports = {
  collectionBukhari,
  client,
  collectionAllBook,
  collectionAbudawud,
  collectionAhmad,
  collectionDarimi,
  collectionIbnumajah,
  collectionMalik,
  collectionMuslim,
  collectionNasai,
  collectionRiyadhus,
  collectionSyafii,
  collectionTirmidzi,
  database,
};
