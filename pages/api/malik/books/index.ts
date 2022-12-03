const Malik = require("../../../../models/Malik");

export default async function index(req, res) {
  const sunnah = await Malik.getAllBook();
  return res.json(sunnah);
}
