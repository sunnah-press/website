const Abudawud = require("../../../../models/Abudawud");

export default async function index(req: any, res: any) {
  const sunnah = await Abudawud.getAllBook();
  return res.json(sunnah);
}
