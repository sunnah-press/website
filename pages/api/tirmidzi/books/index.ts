const Tirmidzi = require("../../../../models/Tirmidzi");

export default async function index(req, res) {
  const sunnah = await Tirmidzi.getAllBook();
  return res.json(sunnah);
}
