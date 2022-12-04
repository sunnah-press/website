import Homepage from "../components/containers/Homepage";
import Layout from "../components/layouts/Layout";
import Main from "../components/layouts/Main";
// import styles from '../styles/Home.module.css'
import Head from "next/head";
export default function Home() {
  return (
    <Layout>
      <Head>
        <meta property="og:url" content="https://sunnah.press" />
        <meta
          property="og:title"
          content="Sunnah.press - Kumpulan Hadits Nabi Muhammad SAW (صلى الله عليه و سلم)"
        />
        <meta
          property="og:description"
          content="Kumpulan Hadits Nabi Muhammad SAW (صلى الله عليه و سلم) dalam bahasa Indonesia"
        />
        <meta
          name="description"
          content="Hadits Nabi Muhammad (saw) dalam bahasa Indonesia"
        />
        <meta
          name="keywords"
          content="hadits, sunnah, bukhari, muslim, shahih, sahih, sunan, tirmidzi, syafii, ahmad, ibnu majah, darimi, abu dawud, arabic, iman, islam, Allah, buku, indonesia"
        />
        <title>Sunnah.press</title>
        <link rel="icon" href="/assets/sunnah-brand/favicon.ico" />
      </Head>

      <Main container={<Homepage />} margin="mb-10 mt-32" />
    </Layout>
  );
}
