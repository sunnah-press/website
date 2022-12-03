import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

export default function index() {
  const slug = "syafii";
  const coll = "Musnad Syafii";
  return (
    <Layout>
      <Main container={<AllHadits slug={slug} coll={coll} />} margin="mb-10" />
    </Layout>
  );
}
