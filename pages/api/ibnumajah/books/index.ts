const Ibnumajah = require("../../../../models/Ibnumajah");

export default async function index(req, res) {
  const sunnah = await Ibnumajah.getAllBook();
  return res.json(sunnah);
}
