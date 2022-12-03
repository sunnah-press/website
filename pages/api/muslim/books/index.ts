const Muslim = require("../../../../models/Muslim");

export default async function index(req, res) {
  const sunnah = await Muslim.getAllBook();
  return res.json(sunnah);
}
