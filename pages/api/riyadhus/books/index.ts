const Riyadhus = require("../../../../models/Riyadhus");

export default async function index(req: any, res: any) {
  const sunnah = await Riyadhus.getAllBook();
  return res.json(sunnah);
}
