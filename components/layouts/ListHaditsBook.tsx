import Link from "next/link";
import { useCallback, useRef } from "react";
import Card from "./Card";
import ListPage from "./ListPage";
import { Loader } from "./Loader/Loader";

export const ListHaditsBook = ({ hadits, setPage, loading, hasMore }) => {
  if (hadits.length === 0) return <Loader />;

  const observer = useRef();
  const lastHaditsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      const option = {
        root: null,
        threshold: 0,
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
    <article>
      <p>Tidak ada</p>
    </article>
  );
  return (
    <>
      <div className="container mt-32 mb-10 md:max-w-3xl w-11/12 flex mx-auto self-center justify-center">
        <div className="breadcrumbs p-4 rounded flex flex-wrap items-center gap-2 md:text-sm text-xs justify-center bg-slate-100 text-slate-900 border dark:text-slate-400 dark:bg-slate-800 dark:border-slate-800">
          <Link href="/" className="group">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-3"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  className="group-hover:fill-slate-600 dark:fill-slate-400"
                  d="M153 498 c-79 -79 -146 -153 -149 -165 -8 -29 12 -62 41 -69 25 -6
                          25 -8 25 -115 0 -99 2 -110 22 -129 19 -18 33 -20 93 -18 l70 3 5 95 5 95 55
                          0 55 0 5 -95 5 -95 70 -3 c60 -2 74 0 93 18 20 19 22 30 22 129 0 107 0 109
                          25 115 29 7 49 40 41 69 -3 12 -70 86 -149 165 -103 101 -150 142 -167 142
                          -17 0 -64 -41 -167 -142z"
                />
              </g>
            </svg>
          </Link>

          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-3"
            viewBox="0 0 100.000000 100.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                className="dark:fill-slate-400"
                d="M285 870 l-70 -70 150 -150 150 -150 -150 -150 -150 -150 72 -72 71
     -71 221 214 c122 117 221 217 221 222 0 13 -422 447 -435 447 -6 0 -42 -32
     -80 -70z"
              />
            </g>
          </svg>
          <Link href={`/${hadits[0]?.slug ? hadits[0].slug : ""}/books`}>
            {hadits[0]?.koleksi ? hadits[0].koleksi : ""}
          </Link>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-3"
            viewBox="0 0 100.000000 100.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                className="dark:fill-slate-400"
                d="M285 870 l-70 -70 150 -150 150 -150 -150 -150 -150 -150 72 -72 71
     -71 221 214 c122 117 221 217 221 222 0 13 -422 447 -435 447 -6 0 -42 -32
     -80 -70z"
              />
            </g>
          </svg>

          {hadits[0]?.kitab_nama ? hadits[0].kitab_nama : ""}
        </div>
      </div>

      <div className="my-10 table border dark:bg-slate-800 dark:border-slate-800 rounded mx-auto md:max-w-4xl w-11/12 bg-slate-100">
        <table className="w-full table-auto text-slate-800 dark:text-slate-50 rounded text-center text-sm">
          <thead>
            <tr className="border-b dark:border-slate-50/40">
              <th className="p-2">#</th>
              <th className="p-2">NO</th>
              <th className="p-2">ID</th>
              <th className="p-2">Arabic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-2">Buku:</th>
              <td className="p-2">
                {hadits[0]?.kitab_id ? hadits[0].kitab_id : ""}
              </td>
              <td className="p-2">
                {hadits[0]?.kitab_nama ? hadits[0].kitab_nama : ""}
              </td>
              <td className="p-2 arabic1 text-base md:text-lg">
                {hadits[0]?.kitab_arab ? hadits[0].kitab_arab : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ListPage>{content}</ListPage>
    </>
  );
};
