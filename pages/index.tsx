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

// export async function getServerSideProps() {

//   const data = await axios(config)
//     .then((res) => {
//       return res.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
