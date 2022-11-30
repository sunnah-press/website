import { Breadcrumbs } from "../layouts/Breadcrumbs";
import { Loader } from "../layouts/Loader/Loader";
import { Pagination } from "../layouts/pagination/Pagination";
import { Table } from "../layouts/Table";

export const OneHadits = (props) => {
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
