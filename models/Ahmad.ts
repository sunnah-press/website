const { collectionAhmad } = require("../config/database");
export {};
// Query for a All Book
const getAllBook = () => {
  return collectionAhmad
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

// Query for a One book
const getOneBook = (id: Number, page: any) => {
  const query = { kitab_id: id };
  const option = { skip: (page - 1) * 4, limit: 4 };
  return collectionAhmad.find(query, option).sort({ id: 1 }).toArray();
};

module.exports = {
  getAllBook,
  getOneBook,
};
