import { useState } from "react";
import Card from "./Card";

const ListPage = ({ searchResults, hadits, setSearchResults }) => {
  const hasil = searchResults;
  if (hasil === undefined) return setSearchResults(hadits);
  const results = hasil.data?.map((dits) => (
    <Card
      key={dits.id}
      id={dits.id}
      terjemah={dits.terjemah}
      arab={dits.arab}
      koleksi={dits.koleksi}
    />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>Tidak ada</p>
    </article>
  );

  return (
    <div className="cards grid grid-cols-1 justify-items-center gap-4 text-slate-900 md:max-w-4xl md:mx-auto md:grid-cols-2">
      {content}
    </div>
  );
};

export default ListPage;
