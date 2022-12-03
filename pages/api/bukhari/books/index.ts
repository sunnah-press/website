const Bukhari = require("../../../../models/Bukhari");

export default async function index(req, res) {
  const sunnah = await Bukhari.getAllBook();
  return res.json(sunnah);
}
