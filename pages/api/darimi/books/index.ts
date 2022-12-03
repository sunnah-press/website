const Darimi = require("../../../../models/Darimi");

export default async function index(req: any, res: any) {
  const sunnah = await Darimi.getAllBook();
  return res.json(sunnah);
}
