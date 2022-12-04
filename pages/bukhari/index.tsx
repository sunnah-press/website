import axios from "axios";
import useSWR from "swr";
import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

export default function Index() {
  const slug = "bukhari";
  const coll = "Shahih Al-Bukhari";
  return (
    <Layout>
      <Main container={<AllHadits slug={slug} coll={coll} />} margin="mb-10" />
    </Layout>
  );
}

// export async function getStaticProps(context: any) {
//   // const fetcher = (url: any) =>
//   //   axios({
//   //     method: "GET",
//   //     url: url,
//   //     params: { search, page, limit },
//   //   }).then((res) => res.data);
//   // const { data, error } = useSWR("http://localhost:3000/api/bukhari", fetcher);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(4);

//   const data = await axios({
//     method: "GET",
//     url: `http://localhost:3000/api/bukhari`,
//     params: { search, page, limit },
//   }).then((res) => res.data);

//   return {
//     props: {
//       data,
//     },
//   };
// }
