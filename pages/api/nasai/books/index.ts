const Nasai = require("../../../../models/Nasai");

export default async function index(req: any, res: any) {
  const sunnah = await Nasai.getAllBook();
  return res.json(sunnah);
}
