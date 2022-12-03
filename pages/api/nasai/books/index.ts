const Nasai = require("../../../../models/Nasai");

export default async function index(req, res) {
  const sunnah = await Nasai.getAllBook();
  return res.json(sunnah);
}
