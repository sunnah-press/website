const Riyadhus = require("../../../../models/Riyadhus");

export default async function index(req, res) {
  const sunnah = await Riyadhus.getAllBook();
  return res.json(sunnah);
}
