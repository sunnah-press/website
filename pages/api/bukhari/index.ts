const { collectionBukhari } = require("../../../config/database");

type Data = {
  name: string;
};

export default async function getAllBukhari(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const sc = req.query.search;
    const page = parseInt(req.query.page) || 1;
    const haditsPerPage = parseInt(req.query.limit) || 4;

    function containsOnlyNumbers(str) {
      return /^\d+$/.test(str);
    }

    const agg = [
      {
        $search: {
          index: "bukhariIndex",
          text: {
            query: `${sc}`,
            path: {
              wildcard: "*",
            },
          },
          count: {
            type: "total",
          },
        },
      },

      {
        $facet: {
          docs: [
            { $skip: (page - 1) * haditsPerPage },
            { $limit: haditsPerPage },
          ],
          meta: [{ $replaceWith: "$$SEARCH_META" }, { $limit: 1 }],
        },
      },
      { $unwind: "$meta" },
    ];

    // console.log(agg[0].$search.text);

    if (containsOnlyNumbers(sc)) {
      const num = sc;
      const ags = [
        { $addFields: { idStr: { $toString: "$id" } } },
        { $match: { idStr: { $regex: num, $options: "i" } } },
        { $skip: (page - 1) * haditsPerPage },
        { $limit: haditsPerPage },
      ];

      return collectionBukhari
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

    if (agg[0].$search.text.query === "") {
      let totalItems;
      return collectionBukhari
        .countDocuments()
        .then((count) => {
          totalItems = count;
          return collectionBukhari
            .find()
            .sort({ id: 1 })
            .skip((page - 1) * haditsPerPage)
            .limit(haditsPerPage)
            .toArray();
        })
        .then((result) => {
          res.json({
            message: "Get All Hadits Bukhari Success!",
            totalData: totalItems,
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
    } else {
      let totalItems;
      return collectionBukhari
        .countDocuments()
        .then((count) => {
          totalItems = count;
          return collectionBukhari.aggregate(agg).toArray();
        })
        .then((result) => {
          res.json({
            message: "Get All Hadits Bukhari Success!",
            totalData: totalItems,
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
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      ServerMessage: error.message,
    });
  }
}
