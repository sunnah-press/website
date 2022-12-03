const Muslim = require("../../../../models/Muslim");

export default async function index(req: any, res: any) {
  const sunnah = await Muslim.getAllBook();
  return res.json(sunnah);
}
