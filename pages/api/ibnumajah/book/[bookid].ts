const Ibnumajah = require("../../../../models/Ibnumajah");

export default async function handler(req: any, res: any) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Ibnumajah.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
