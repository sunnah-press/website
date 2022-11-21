const { collectionBukhari, find, aggregate } = require("../config/database");

// Query for a All hadits Bukhari
const getAllBukhari = (agg) => {
  if (agg[0].$search.text.query === "undefined") {
    const query = {};
    const option = { limit: 4 };
    return find(query, option).toArray();
  }

  return aggregate(agg).toArray();
};

// Query for a One hadits Bukhari
const getOneBukhari = (query) => {
  return collectionBukhari.findOne(query);
};

// Query for a All Books of Bukhari
const getAllBookBukhari = () => {
  // const pjt = { _id: 0, kitab_nama: 1, kitab_id: 1, kitab_arab: 1 };
  // return collectionBukhari.find({}).limit(4).project(pjt).toArray();
  // return collectionBukhari.distinct(
  //   "kitab_id",
  //   {},
  //   { collation: { locale: "fr", strength: 1, caseLevel: true } }
  // );

  return collectionBukhari
    .aggregate([
      {
        $group: {
          _id: "$kitab_id",
          kitab: { $addToSet: "$kitab_nama" },
          kitabarab: { $addToSet: "$kitab_arab" },
        },
      },
      { $sort: { _id: 1 } },
      { $unwind: "$kitab" },
      { $unwind: "$kitabarab" },
      { $skip: 1 },
    ])
    .toArray();
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
