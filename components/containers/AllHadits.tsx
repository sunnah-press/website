import { useCallback, useRef, useState } from "react";
import SearchBar from "../layouts/SearchBar";
import ListPage from "../layouts/ListPage";
import useHaditsSearch from "../../hooks/useHaditsSearch";
import Card from "../layouts/Card";
import { MyComponent } from "../layouts/Animation";
import Link from "next/link";

export default function AllHadits() {
  const slug = "bukhari";
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const { loading, error, hadits, hasMore } = useHaditsSearch(
    search,
    page,
    limit,
    slug
  );
  const observer = useRef();
  const lastHaditsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      const option = {
        root: null,
        threshold: 0,
        rootMargin: "-150px",
      };
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      }, option);
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  //
  const results = hadits.map((dits, index) => {
    if (hadits.length === index + 1) {
      return (
        <div
          ref={lastHaditsElementRef}
          key={dits.id}
          className="card bg-slate-50 dark:bg-blue-900 dark:text-slate-200 w-11/12 md:w-full border dark:border-slate-900 rounded text-sm"
        >
          <div className="card-title border-b dark:border-slate-500 text-center font-semibold py-2 text-base">
            {dits.koleksi} {dits.id}
          </div>
          <div className="card-body p-4 text-center flex flex-col gap-4">
            <p className="arabic1 text-xl">{dits.arab}</p>
            <p className="artinya">{dits.terjemah}</p>
            <Link
              href={`/bukhari/${dits.id}`}
              className="p-2 bg-blue-500 rounded hover:ring hover:text-white focus:ring text-center text-white font-semibold"
            >
              Lihat
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <Card
          key={dits.id}
          id={dits.id}
          terjemah={dits.terjemah}
          arab={dits.arab}
          koleksi={dits.koleksi}
        />
      );
    }
  });

  const content = results?.length ? (
    results
  ) : (
    <div className="flex justify-center">{loading && <MyComponent />}</div>
  );

  return (
    <div className="container mx-auto">
      <div className="hero text-center mt-32 mb-10 w-4/5 mx-auto">
        <h2 className="text-3xl font-extrabold bg-gradient-to-tr from-blue-700 to-cyan-500 bg-clip-text text-transparent p-3">
          Semua Hadits di Shahih Al-Bukhari
        </h2>
        <SearchBar setSearch={setSearch} setPage={setPage} search={search} />
      </div>

      <ListPage>{content}</ListPage>
    </div>
  );
}
