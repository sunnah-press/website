import { Breadcrumbs } from "../layouts/Breadcrumbs";
import { Table } from "../layouts/Table";

export const OneHadits = (props) => {
  const hadith = props.data;
  return (
    <>
      <Breadcrumbs hadith={hadith} />

      <Table hadith={hadith} />
    </>
  );
};
