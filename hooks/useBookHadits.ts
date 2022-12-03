import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

// interface ubhProps {
//   bookid: Number;
//   page: Number;
//   slug: String;
// }
export default function useBookHadits(
  bookid?: Number,
  page?: Number,
  slug?: String
) {
  // console.log(bookid);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hadits, setHadits] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(false);

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
        // console.log(typeof res);
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
