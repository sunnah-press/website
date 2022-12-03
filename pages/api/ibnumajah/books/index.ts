const Ibnumajah = require("../../../../models/Ibnumajah");

export default async function index(req: any, res: any) {
  const sunnah = await Ibnumajah.getAllBook();
  return res.json(sunnah);
}
