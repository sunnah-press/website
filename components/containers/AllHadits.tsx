import { useCallback, useRef, useState } from "react";
import SearchBar from "../layouts/SearchBar";
import ListPage from "../layouts/ListPage";
import useHaditsSearch from "../../hooks/useHaditsSearch";
import Card from "../layouts/Card";
import { MyComponent } from "../layouts/Animation";
import Link from "next/link";
import Head from "next/head";

interface AllHaditsProps {
  slug: string;
  coll: string;
}

export default function AllHadits(props: AllHaditsProps) {
  const { slug, coll } = props;
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  interface ushProps {
    loading: boolean;
    hadits: any;
    hasMore: boolean;
  }
  const { loading, hadits, hasMore }: ushProps = useHaditsSearch(
    search,
    page,
    limit,
    slug
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const lastHaditsElementRef = useCallback(
    (node: any) => {
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
  const results = hadits.map((dits: any, index: number) => {
    // console.log(dits);
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
              href={`/${dits.slug}/${dits.id}`}
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
          slug={dits.slug}
        />
      );
    }
  });

  const content = results?.length ? (
    results
  ) : (
    <div className="flex justify-center">{loading && <MyComponent />}</div>
  );

  const title: string = `${
    hadits[0]?.koleksi ? hadits[0].koleksi : ""
  } | Sunnah.press`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/assets/sunnah-brand/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="hero text-center mt-32 mb-10 w-4/5 mx-auto">
          <h2 className="text-3xl font-extrabold bg-gradient-to-tr from-blue-700 to-cyan-500 bg-clip-text text-transparent p-3">
            Semua Hadits di {coll}
          </h2>
          <SearchBar setSearch={setSearch} setPage={setPage} />
        </div>

        <ListPage>{content}</ListPage>
      </div>
    </>
  );
}
