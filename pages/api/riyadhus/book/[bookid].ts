const Riyadhus = require("../../../../models/Riyadhus");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Riyadhus.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
