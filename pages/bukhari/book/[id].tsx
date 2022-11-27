import { useRouter } from "next/router";
import Layout from "../../../components/layouts/Layout";
import { ListHaditsBook } from "../../../components/layouts/ListHaditsBook";
import Main from "../../../components/layouts/Main";

export default function book({ hadits }) {
  return (
    <Layout>
      <Main container={<ListHaditsBook data={hadits} />} margin="mb-10" />
    </Layout>
  );
}

export async function getStaticPaths(context) {
  const id = context.params;
  const paths = [{ params: { id: parseInt(id).toString() } }];

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch("http://localhost:3000/api/bukhari/book/" + id);
  const hadits = await res.json();
  return {
    props: { hadits },
  };
}
