import Donation from "../../components/containers/Donation";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";

export default function index() {
  return (
    <Layout>
      <Main container={<Donation />} margin="mb-10" />
    </Layout>
  );
}
