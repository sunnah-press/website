import AllHadits from "../../components/containers/AllHadits";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

export default function index() {
  const slug = "nasai";
  const coll = "Sunan Nasa'i";
  return (
    <Layout>
      <Main container={<AllHadits slug={slug} coll={coll} />} margin="mb-10" />
    </Layout>
  );
}
