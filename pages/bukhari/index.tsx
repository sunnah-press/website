import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";
const Bukhari = require("../../models/Bukhari");

interface gasProps {
  data: string;
  agg: Function;
}
export default function index(props: gasProps) {
  const { data } = props;

  return (
    <Layout>
      <Main container={<AllHadits data={data} />} margin="mb-10" />
    </Layout>
  );
}

type Data = {
  name: string;
};

export async function getStaticProps(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(req.query.search);
  const agg = [
    {
      $search: {
        index: "bukhariIndex",
        text: {
          query: "Permulaan Wahyu",
          path: {
            wildcard: "*",
          },
        },
      },
    },
    {
      $limit: 5,
    },
  ];
  // console.log("tes1");
  // const agg = [
  //   {
  //     $search: {
  //       index: "bukhariIndex",
  //       autocomplete: {
  //         query: "",
  //         path: "terjemah",
  //       },
  //     },
  //   },
  //   { $limit: 5 },
  //   { $project: { _id: 0, terjemah: 1 } },
  // ];
  // const agg =

  const sunnah = await Bukhari.getAllBukhari(agg);
  const data = JSON.stringify(sunnah);
  return {
    props: { data }, // will be passed to the page component as props
  };
}
