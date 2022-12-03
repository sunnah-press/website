const Darimi = require("../../../../models/Darimi");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Darimi.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
