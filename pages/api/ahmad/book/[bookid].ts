const Ahmad = require("../../../../models/Ahmad");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Ahmad.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
