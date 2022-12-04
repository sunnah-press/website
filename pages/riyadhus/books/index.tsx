import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../../components/layouts/Layout";
import { Listbook } from "../../../components/layouts/Listbook";
import Main from "../../../components/layouts/Main";

export default function Index() {
  const router = useRouter();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/${router.asPath.split("/")[1]}/books`,
    })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Layout>
      <Main container={<Listbook data={books} />} />
    </Layout>
  );
}
