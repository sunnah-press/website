import axios from "axios";
import { useEffect, useState } from "react";

export default function useHaditsSearch(search, page, limit, slug) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hadits, setHadits] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setHadits([]);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let source = axios.CancelToken.source();
    axios({
      method: "GET",
      url: `http://localhost:3000/api/${slug}`,
      params: { search, page, limit },
      cancelToken: source.token,
    })
      .then((res) => {
        if (res.data.data[0].docs === undefined) {
          setHasMore(res.data.data.length > 0);
          setLoading(false);
          return setHadits((prevHadits) => {
            return [...new Set([...prevHadits, ...res.data.data])];
          });
        }

        setHadits((prevHadits) => {
          return [...new Set([...prevHadits, ...res.data.data[0].docs])];
        });

        setHasMore(res.data.data[0].docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => source.cancel();
  }, [search, page]);

  return { loading, error, hadits, hasMore };
}
