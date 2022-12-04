import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

export default function Index() {
  const [slug, setSlug] = useState("");
  const [coll, setColl] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/${router.asPath.split("/")[1]}`,
    })
      .then((res) => {
        setSlug(res.data.data[0].slug);
        setColl(res.data.data[0].koleksi);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Layout>
      <Main container={<AllHadits slug={slug} coll={coll} />} margin="mb-10" />
    </Layout>
  );
}
