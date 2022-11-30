const { collectionBukhari } = require("../config/database");

// Query for a All hadits Bukhari
const getAllBukhari = (agg) => {
  return collectionBukhari.aggregate(agg).toArray();
};

// Query for a One hadits Bukhari
const getOneBukhari = (id) => {
  return collectionBukhari.findOne({ id: id });
};

// Query for a All Books of Bukhari
const getAllBookBukhari = () => {
  return collectionBukhari
    .aggregate([
      {
        $group: {
          _id: "$kitab_id",
          kitab: { $addToSet: "$kitab_nama" },
          kitabarab: { $addToSet: "$kitab_arab" },
          koleksi: { $addToSet: "$koleksi" },
          slug: { $addToSet: "$slug" },
        },
      },
      { $sort: { _id: 1 } },
      { $unwind: "$kitab" },
      { $unwind: "$kitabarab" },
      { $unwind: "$koleksi" },
      { $unwind: "$slug" },
      { $skip: 1 },
    ])
    .toArray();
};

// Query for a One book of Bukhari
const getOneBookBukhari = (id, page) => {
  const query = { kitab_id: id };
  const option = { skip: (page - 1) * 4, limit: 4 };
  return collectionBukhari.find(query, option).sort({ id: 1 }).toArray();
};

module.exports = {
  getAllBukhari,
  getOneBukhari,
  getAllBookBukhari,
  getOneBookBukhari,
};
