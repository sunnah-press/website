const { collectionAbudawud } = require("../../../config/database");

export default async function handler(req: any, res: any) {
  const { id } = req.query;
  // const page = parseInt(req.query.page) || 1;
  const haditsPerPage = parseInt(req.query.limit) || 1;

  let totalItems: any;
  return collectionAbudawud
    .countDocuments()
    .then((count: any) => {
      totalItems = count;
      return collectionAbudawud
        .find()
        .sort({ id: 1 })
        .skip((id - 1) * haditsPerPage)
        .limit(haditsPerPage)
        .toArray();
    })
    .then((result: any) => {
      res.json({
        message: "Get All Hadits Success!",
        totalData: totalItems,
        current_page: id,
        per_page: haditsPerPage,
        data: result[0],
      });
    })
    .catch((error: any) => {
      res.status(500).json({
        message: "Server Error",
        ServerMessage: error.message,
      });
    });
}
