const { collectionAllBook } = require("../../../config/database");

type Data = {
  name: string;
};

export default async function getAll(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const sc = req.query.search;
    const page = parseInt(req.query.page) || 1;
    const haditsPerPage = parseInt(req.query.limit) || 4;
    console.log(req.query);
    function containsOnlyNumbers(str) {
      return /^\d+$/.test(str);
    }

    if (containsOnlyNumbers(sc)) {
      const num = sc;
      const ags = [
        { $addFields: { idStr: { $toString: "$id" } } },
        { $match: { idStr: { $regex: num, $options: "i" } } },
        { $skip: (page - 1) * haditsPerPage },
        { $limit: haditsPerPage },
      ];

      return collectionAllBook
        .aggregate(ags)
        .toArray()
        .then((result) => {
          res.json({
            message: "Get All Hadits Bukhari Success!",
            current_page: page,
            per_page: haditsPerPage,
            data: result,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "Server Error",
            ServerMessage: error.message,
          });
        });
    }
    const gas = { $text: { $search: "123" } };
    // console.log(agg[0].$search.text);
    collectionAllBook
      .find()
      .skip((page - 1) * haditsPerPage)
      .limit(haditsPerPage)
      .toArray()
      .then((result) => {
        return res.json({
          message: "succes",
          data: result,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      ServerMessage: error.message,
    });
  }
}
