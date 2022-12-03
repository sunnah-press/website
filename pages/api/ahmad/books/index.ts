const Ahmad = require("../../../../models/Ahmad");

export default async function index(req, res) {
  const sunnah = await Ahmad.getAllBook();
  return res.json(sunnah);
}
