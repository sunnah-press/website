const Bukhari = require("../../../models/Bukhari");

export default async function handler(req, res) {
  const { bukhariid } = req.query;
  const sunnah = await Bukhari.getOneBukhari(parseInt(bukhariid));
  return res.json(sunnah);
}
