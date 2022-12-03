const Muslim = require("../../../../models/Muslim");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Muslim.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
