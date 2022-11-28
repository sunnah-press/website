import { Breadcrumbs } from "../layouts/Breadcrumbs";
import { Loader } from "../layouts/Loader/Loader";
import { Loader1 } from "../layouts/Loader/Loader1";
import { Table } from "../layouts/Table";

export const OneHadits = (props) => {
  const hadith = props.data;
  const results =
    hadith === undefined ? (
      <Loader />
    ) : (
      <>
        <Breadcrumbs hadith={hadith} />

        <Table hadith={hadith} />
      </>
    );
  return <>{results}</>;
};
