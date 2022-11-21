const Bukhari = require("../../../../models/Bukhari");

export default async function index(req, res) {
  //   const agg = [
  //     {
  //       $search: {
  //         index: "bukharibooks",
  //         autocomplete: {
  //           path: "kitab_nama",
  //           query: "wahyu",
  //         },
  //       },
  //     },
  //     {
  //       $limit: 10,
  //     },
  //     {
  //       $project: {
  //         _id: 0,
  //         kitab_nama: 1,
  //       },
  //     },
  //   ];
  // const agg = [
  //   {
  //     $limit: 10,
  //   },
  //   { $skip: 0 },
  //   {
  //     $project: {
  //       _id: 0,
  //       kitab_nama: 1,
  //     },
  //   },
  // ];

  const sunnah = await Bukhari.getAllBookBukhari();
  //   console.log(sunnah);
  return res.json(sunnah);
}
