const Tirmidzi = require("../../../../models/Tirmidzi");

export default async function index(req: any, res: any) {
  const sunnah = await Tirmidzi.getAllBook();
  return res.json(sunnah);
}
