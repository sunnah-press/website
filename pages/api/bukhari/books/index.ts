const Bukhari = require("../../../../models/Bukhari");

export default async function index(req: any, res: any) {
  const sunnah = await Bukhari.getAllBook();
  return res.json(sunnah);
}
