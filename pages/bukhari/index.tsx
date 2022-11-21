import axios from "axios";
import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

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
