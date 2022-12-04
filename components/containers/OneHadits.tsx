import { Breadcrumbs } from "../layouts/Breadcrumbs";
import { Loader } from "../layouts/Loader/Loader";
import { Pagination } from "../layouts/pagination/Pagination";
import { Table } from "../layouts/Table";
import Head from "next/head";

export const OneHadits = (props: any) => {
  if (props.hadits.current_page === "undefined") return <Loader />;
  const hadits = props.hadits.data;
  // console.log(hadits);
  const totalHadits = props.hadits.totalData;
  const slug = hadits?.slug ? hadits.slug : "";
  const numhadits = props.id;

  const results =
    hadits === undefined ? (
      <Loader />
    ) : (
      <>
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
          <title>
            {hadits.koleksi} {hadits.id} | Sunnah.press
          </title>
          <link rel="icon" href="/assets/sunnah-brand/favicon.ico" />
        </Head>
        <Breadcrumbs hadits={hadits} />

        <Table hadits={hadits} />
        <Pagination
          numHadits={numhadits}
          slug={slug}
          totalHadits={totalHadits}
        />
      </>
    );

  return <>{results}</>;
};
