const { collectionAllBook } = require("../../../config/database");

export default async function getAll(req: any, res: any) {
  function containsOnlyNumbers(str: any) {
    return /^\d+$/.test(str);
  }
  try {
    await collectionAllBook.createIndex({
      terjemah: "text",
      kitab_nama: "text",
      arab: "text",
      koleksi: "text",
    });

    const sc = req.query.search;
    const page = parseInt(req.query.page) || 1;
    const haditsPerPage = parseInt(req.query.limit) || 4;

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
        .then((result: any) => {
          res.json({
            message: "Get All Hadits Success!",
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

    const query =
      { $text: { $search: sc } } && req.query.search
        ? { $text: { $search: sc } }
        : {};

    return collectionAllBook
      .find(query)
      .skip((page - 1) * haditsPerPage)
      .limit(haditsPerPage)
      .toArray()
      .then((result: any) => {
        return res.json({
          message: "Get All Hadits Success!",
          data: result,
        });
      });
  } catch (error: any) {
    res.status(500).json({
      message: "Server Error",
      ServerMessage: error.message,
    });
  }
}
