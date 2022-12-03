import axios from "axios";
import Layout from "../../../components/layouts/Layout";
import { Listbook } from "../../../components/layouts/Listbook";
import Main from "../../../components/layouts/Main";
// require("dotenv").config();
export default function index({ books }) {
  return (
    <Layout>
      <Main container={<Listbook data={books} />} />
    </Layout>
  );
}

export async function getStaticProps() {
  const url = process.env.URL;

  const res = await fetch(url + "/api/abudawud/books");
  const books = await res.json();
  return {
    props: { books },
  };
}
