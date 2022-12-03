import Link from "next/link";
import Head from "next/head";
export const Listbook = (props: any) => {
  const books = props.data;
  const result = books.map((book: any) => (
    <Link
      key={book._id}
      href={`/${book.slug}/book/${book._id}`}
      className="p-3 border bg-slate-200 dark:bg-slate-800 dark:border-slate-700 hover:bg-blue-600 focus:bg-blue-600 hover:text-slate-200 hover:ring rounded text-center font-semibold"
    >
      {book._id}. {book.kitab} - {book.kitabarab}
    </Link>
  ));

  const content = result?.length ? result : <article>Tidak ada</article>;
  // console.log(books);
  const title = `${books[0]?.koleksi ? books[0].koleksi : ""} | Sunnah.press`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/assets/sunnah-brand/favicon.ico" />
      </Head>
      <div className="container mt-32 md:max-w-3xl w-11/12 flex mx-auto self-center justify-center">
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
          {books[0]?.koleksi ? books[0].koleksi : ""}
        </div>
      </div>
      <div className="w-11/12 max-w-2xl flex flex-col gap-4 mx-auto dark:text-slate-200 my-10">
        {content}
      </div>
    </>
  );
};
