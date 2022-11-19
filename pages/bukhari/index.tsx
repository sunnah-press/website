import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

const axios = require("axios");
const config = require("../../config/database");

export default function index({ data }) {
  return (
    <Layout>
      <Main container={<AllHadits data={data} />} margin="mb-10" />
    </Layout>
  );
}

export async function getStaticProps() {
  const query = {
    collection: "bukhari",
    database: "hadits",
    dataSource: "Cluster0",
    filter: { id: { $gt: 0 } },
    limit: 5,
  };

  const data = await axios(config(query))
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
