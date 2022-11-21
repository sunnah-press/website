const Bukhari = require("../../models/Bukhari");

type Data = {
  name: string;
};

export default async function getAllBukhari(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // console.log(req.query.search);
    // const agg = [
    //   {
    //     $search: {
    //       index: "bukhariIndex",
    //       autocomplete: {
    //         query: `${req.query.search}`,
    //         path: "terjemah",
    //       },
    //     },
    //   },
    //   { $limit: 5 },
    //   { $project: { _id: 0, terjemah: 1 } },
    // ];
    const sc = req.query.search;
    const agg = [
      {
        $search: {
          index: "bukhariIndex",
          text: {
            query: `permulaan ${sc}`,
            path: {
              wildcard: "*",
            },
          },
        },
      },
      {
        $limit: 10,
      },
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

// export default async function getOneBukhari(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   try {
//     // const { id } = req.params;
//     const query = { id: 1 };
//     const sunnah = await Bukhari.getOneBukhari(query);

//     res.json({
//       message: "Get One Hadits Bukhari Success!",
//       data: sunnah,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Server Error",
//       ServerMessage: error.message,
//     });
//   }
// }
