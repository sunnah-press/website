import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../../components/layouts/Layout";
import { ListHaditsBook } from "../../../components/layouts/ListHaditsBook";
import Main from "../../../components/layouts/Main";
import useBookHadits from "../../../hooks/useBookHadits";

export default function book() {
  const router = useRouter();
  const { id } = router.query;
  const [slug, setSlug] = useState("");
  const [page, setPage] = useState(1);
  const [bookid, setBookId] = useState();
  const { loading, error, hadits, hasMore } = useBookHadits(bookid, page, slug);

  useEffect(() => {
    setBookId(id);
    setSlug("bukhari");
  }, [id]);

  return (
    <Layout>
      <Main
        container={
          <ListHaditsBook
            hadits={hadits}
            setPage={setPage}
            loading={loading}
            hasMore={hasMore}
          />
        }
        margin="mb-10"
      />
    </Layout>
  );
}
