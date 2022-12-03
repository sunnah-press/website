const Nasai = require("../../../../models/Nasai");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const page = req.query.page;
  const book = await Nasai.getOneBook(parseInt(bookid), parseInt(page));
  return res.json(book);
}
