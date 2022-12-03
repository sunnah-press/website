import Donation from "../../components/containers/Donation";
import Layout from "../../components/layouts/Layout";
import Main from "../../components/layouts/Main";
import Head from "next/head";
export default function index() {
  return (
    <Layout>
      <Head>
        <title>Donation - Sunnah.press</title>
        <link rel="icon" href="/assets/sunnah-brand/favicon.ico" />
      </Head>
      <Main container={<Donation />} margin="mb-10" />
    </Layout>
  );
}
