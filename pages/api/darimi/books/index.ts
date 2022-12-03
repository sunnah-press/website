const Darimi = require("../../../../models/Darimi");

export default async function index(req, res) {
  const sunnah = await Darimi.getAllBook();
  return res.json(sunnah);
}
