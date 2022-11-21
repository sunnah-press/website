const Bukhari = require("../../../models/Bukhari");

type Data = {
  name: string;
};

export default async function getAllBukhari(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const sc = req.query.search;

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
        },
      },
      {
        $limit: 10,
      },
      { $skip: 0 },
    ];

    console.log(agg[0].$search.text);
    const sunnah = await Bukhari.getAllBukhari(agg);
    res.json({
      message: "Get All Hadits Bukhari Success!",
      data: sunnah,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      ServerMessage: error.message,
    });
  }
}
