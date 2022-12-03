const Abudawud = require("../../../../models/Abudawud");

export default async function handler(req: any, res: any) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Abudawud.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
