import Homepage from "../components/containers/Homepage";
import Layout from "../components/layouts/Layout";
import Main from "../components/layouts/Main";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Main container={<Homepage />} margin="mb-10 mt-32" />
    </Layout>
  );
}
