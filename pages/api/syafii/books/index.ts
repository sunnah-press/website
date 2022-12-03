const Syafii = require("../../../../models/Syafii");

export default async function index(req: any, res: any) {
  const sunnah = await Syafii.getAllBook();
  return res.json(sunnah);
}
