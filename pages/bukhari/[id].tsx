import { OneHadits } from "../../components/containers/OneHadits";
import Main from "../../components/layouts/Main";
import Layout from "../../components/layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function hadits() {
  const router = useRouter();
  const [hadits, setHadits] = useState([]);
  const { id } = router.query;
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/api/bukhari/${id}`,
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

// export async function getStaticPaths(context) {
//   const id = context.params;
//   const paths = [{ params: { id: parseInt(id).toString() } }];

//   return { paths, fallback: true };
// }

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const res = await fetch("http://localhost:3000/api/bukhari/" + id);
//   const hadits = await res.json();
//   return {
//     props: { hadits, id },
//   };
// }
