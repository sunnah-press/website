import { MyComponent } from "./Animation";
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
    <div className="flex justify-center">
      <MyComponent />
    </div>
  );

  return (
    <div className="cards flex flex-col items-center gap-4 text-slate-900 md:max-w-4xl md:mx-auto">
      {content}
    </div>
  );
};

export default ListPage;
