const Bukhari = require("../../../../models/Bukhari");

export default async function handler(req: any, res: any) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Bukhari.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
