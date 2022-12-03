const Tirmidzi = require("../../../../models/Tirmidzi");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Tirmidzi.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
