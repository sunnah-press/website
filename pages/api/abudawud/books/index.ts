const Abudawud = require("../../../../models/Abudawud");

export default async function index(req, res) {
  const sunnah = await Abudawud.getAllBook();
  return res.json(sunnah);
}
