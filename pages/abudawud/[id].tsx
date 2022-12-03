import { OneHadits } from "../../components/containers/OneHadits";
import Main from "../../components/layouts/Main";
import Layout from "../../components/layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
export default function hadits() {
  const router = useRouter();
  const [hadits, setHadits] = useState([]);
  const { id } = router.query;
  // console.log(hadits.data["koleksi"]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/abudawud/${id}`,
    })
      .then((res) => {
        setHadits(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);

  return (
    <Layout>
      <Main container={<OneHadits hadits={hadits} id={id} />} margin="mb-10" />
    </Layout>
  );
}
