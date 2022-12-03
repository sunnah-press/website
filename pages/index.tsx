import Homepage from "../components/containers/Homepage";
import Layout from "../components/layouts/Layout";
import Main from "../components/layouts/Main";
// import styles from '../styles/Home.module.css'
import Head from "next/head";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sunnah.press</title>
        <link rel="icon" href="/assets/sunnah-brand/favicon.ico" />
      </Head>

      <Main container={<Homepage />} margin="mb-10 mt-32" />
    </Layout>
  );
}
