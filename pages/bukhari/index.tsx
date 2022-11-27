import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

export default function index() {
  return (
    <Layout>
      <Main container={<AllHadits />} margin="mb-10" />
    </Layout>
  );
}
