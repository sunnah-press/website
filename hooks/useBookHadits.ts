import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
// require("dotenv").config();
export default function useBookHadits(bookid, page, slug) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hadits, setHadits] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const url = process.env.URL;
  useEffect(() => {
    setLoading(true);
    setError(false);
    let source = axios.CancelToken.source();
    axios({
      method: "GET",
      url: `/api/${slug}/book/${bookid}`,
      params: { id: bookid, page },
      cancelToken: source.token,
    })
      .then((res) => {
        // console.log(res);
        setHadits((prevHadits) => {
          return [...new Set([...prevHadits, ...res.data])];
        });

        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => source.cancel();
  }, [bookid, page]);

  return { loading, error, hadits, hasMore };
}
