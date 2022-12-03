const Syafii = require("../../../../models/Syafii");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Syafii.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}