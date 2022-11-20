const { collectionBukhari } = require("../config/database");

// Query for a All hadits Bukhari
const getAllBukhari = () => {
  // return collectionBukhari.aggregate(agg).toArray();
  const query = {};
  const option = {};
  return collectionBukhari.find(query, option).toArray();
};

// Query for a One hadits Bukhari
const getOneBukhari = (query) => {
  return collectionBukhari.findOne(query);
};

// Query for a All Books of Bukhari
const getAllBookBukhari = () => {
  return collectionBukhari.find({ kitab_id: { $gt: 0 } }).toArray();
};

// Query for a One book of Bukhari
const getOneBookBukhari = (id) => {
  return collectionBukhari.findOne({ kitab_id: id });
};

module.exports = {
  getAllBukhari,
  getOneBukhari,
  getAllBookBukhari,
  getOneBookBukhari,
};
