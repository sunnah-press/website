import axios from "axios";
import { useEffect, useState } from "react";

export default function useHaditsSearch(
  search: any,
  page: any,
  limit: any,
  slug: any
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hadits, setHadits] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const url = process.env.URL;
  useEffect(() => {
    setHadits([]);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let source = axios.CancelToken.source();
    axios({
      method: "GET",
      url: `/api/${slug}`,
      params: { search, page, limit },
      cancelToken: source.token,
    })
      .then((res) => {
        // console.log(res);
        setHadits((prevHadits) => {
          return [...new Set([...prevHadits, ...res.data.data])];
        });

        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => source.cancel();
  }, [search, page, slug]);

  return { loading, error, hadits, hasMore };
}
