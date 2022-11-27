const Bukhari = require("../../../../models/Bukhari");

export default async function handler(req, res) {
  const { bookid } = req.query;
  const book = await Bukhari.getOneBookBukhari(parseInt(bookid));
  return res.json(book);
}
