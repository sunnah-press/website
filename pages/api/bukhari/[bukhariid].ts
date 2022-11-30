const { collectionBukhari } = require("../../../config/database");

export default async function handler(req, res) {
  const { bukhariid } = req.query;
  // const page = parseInt(req.query.page) || 1;
  const haditsPerPage = parseInt(req.query.limit) || 1;

  let totalItems;
  return collectionBukhari
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return collectionBukhari
        .find()
        .sort({ id: 1 })
        .skip((bukhariid - 1) * haditsPerPage)
        .limit(haditsPerPage)
        .toArray();
    })
    .then((result) => {
      res.json({
        message: "Get All Hadits Bukhari Success!",
        totalData: totalItems,
        current_page: bukhariid,
        per_page: haditsPerPage,
        data: result[0],
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Server Error",
        ServerMessage: error.message,
      });
    });
}
