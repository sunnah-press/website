const { collectionNasai } = require("../../../config/database");

type Data = {
  name: string;
};

export default async function getAll(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await collectionNasai.createIndex({
      terjemah: "text",
      kitab_nama: "text",
      arab: "text",
      koleksi: "text",
    });

    const sc = req.query.search;
    const page = parseInt(req.query.page) || 1;
    const haditsPerPage = parseInt(req.query.limit) || 4;

    function containsOnlyNumbers(str) {
      return /^\d+$/.test(str);
    }
    const agg1 = [{ $match: { $text: { $search: `${sc}` } } }];

    const countAllData = await collectionNasai.countDocuments();
    let countSearchResult;

    if (!containsOnlyNumbers(sc) && req.query.search != undefined) {
      const agg2 = [
        { $match: { $text: { $search: `${sc}` } } },
        { $count: "count" },
      ];
      countSearchResult = await collectionNasai.aggregate(agg2).toArray();

      if (countSearchResult[0] != undefined) {
        return collectionNasai
          .aggregate(agg1)
          .skip((page - 1) * haditsPerPage)
          .limit(haditsPerPage)
          .toArray()
          .then((result) => {
            return res.json({
              message: "Get All Hadits Success!",
              total_data: countAllData,
              search_result: countSearchResult[0].count,
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
    }

    if (containsOnlyNumbers(sc)) {
      const num = sc;
      const ags = [
        { $addFields: { idStr: { $toString: "$id" } } },
        { $match: { idStr: { $regex: num, $options: "i" } } },
        { $skip: (page - 1) * haditsPerPage },
        { $limit: haditsPerPage },
      ];
      const agss = [
        { $addFields: { idStr: { $toString: "$id" } } },
        { $match: { idStr: { $regex: num, $options: "i" } } },
        { $count: "count" },
      ];
      countSearchResult = await collectionNasai.aggregate(agss).toArray();

      return collectionNasai
        .aggregate(ags)
        .toArray()
        .then((result) => {
          res.json({
            message: "Get All Hadits Success!",
            total_data: countAllData,
            search_result: countSearchResult[0].count,
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

    if (agg1[0].$match.$text.$search === "" || "undefined") {
      return collectionNasai
        .find()
        .sort({ id: 1 })
        .skip((page - 1) * haditsPerPage)
        .limit(haditsPerPage)
        .toArray()

        .then((result) => {
          res.json({
            message: "Get All Hadits Success!",
            total_data: countAllData,
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
