const Malik = require("../../../../models/Malik");

export default async function index(req: any, res: any) {
  const sunnah = await Malik.getAllBook();
  return res.json(sunnah);
}
