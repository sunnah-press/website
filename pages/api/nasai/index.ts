const { collectionNasai } = require("../../../config/database");

export default async function getAll(req: any, res: any) {
  function containsOnlyNumbers(str: any) {
    return /^\d+$/.test(str);
  }

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

    const agg1 = [{ $match: { $text: { $search: `${sc}` } } }];

    const countAllData = await collectionNasai.countDocuments();
    let countSearchResult: any;

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
          .then((result: any) => {
            return res.json({
              message: "Get All Hadits Success!",
              total_data: countAllData,
              search_result: countSearchResult[0].count,
              current_page: page,
              per_page: haditsPerPage,
              data: result,
            });
          })
          .catch((error: any) => {
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
        .then((result: any) => {
          res.json({
            message: "Get All Hadits Success!",
            total_data: countAllData,
            search_result: countSearchResult[0].count,
            current_page: page,
            per_page: haditsPerPage,
            data: result,
          });
        })
        .catch((error: any) => {
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

        .then((result: any) => {
          res.json({
            message: "Get All Hadits Success!",
            total_data: countAllData,
            current_page: page,
            per_page: haditsPerPage,
            data: result,
          });
        })
        .catch((error: any) => {
          res.status(500).json({
            message: "Server Error",
            ServerMessage: error.message,
          });
        });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Server Error",
      ServerMessage: error.message,
    });
  }
}
