const Ahmad = require("../../../../models/Ahmad");

export default async function index(req: any, res: any) {
  const sunnah = await Ahmad.getAllBook();
  return res.json(sunnah);
}
