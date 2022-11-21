const Bukhari = require("../../../models/Bukhari");

export default async function handler(req, res) {
  const { bukhariid } = req.query;

  const query = { id: parseInt(bukhariid) };
  const sunnah = await Bukhari.getOneBukhari(query);
  return res.json(sunnah);
}
