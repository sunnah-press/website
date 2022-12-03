const Syafii = require("../../../../models/Syafii");

export default async function index(req, res) {
  const sunnah = await Syafii.getAllBook();
  return res.json(sunnah);
}
