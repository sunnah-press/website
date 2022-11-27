import { OneHadits } from "../../components/containers/OneHadits";
import Main from "../../components/layouts/Main";
import Layout from "../../components/layouts/Layout";

export default function hadits({ hadits }) {
  return (
    <Layout>
      <Main container={<OneHadits data={hadits} />} margin="mb-10" />
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
  const res = await fetch("http://localhost:3000/api/bukhari/" + id);
  const hadits = await res.json();
  return {
    props: { hadits },
  };
}
