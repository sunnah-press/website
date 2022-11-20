import { useEffect, useState } from "react";
import Card from "../layouts/Card";
import SearchBar from "../layouts/SearchBar";
import useSWR from "swr";
import ListPage from "../layouts/ListPage";

export default function AllHadits(props) {
  const gas = JSON.parse(props.data);
  const [hadits, setHadits] = useState(gas);
  const [searchResults, setSearchResults] = useState(gas);

  // const [value, setValue] = useState("permulaan");
  // const fetcher = (url) => fetch(url).then((r) => r.json());

  // const { data, error } = useSWR(
  //   `http://localhost:3000/api/bukhari?search=${value}`,
  //   fetcher
  // );
  // console.log(data);

  // console.log(App());
  //

  // const { dataT, error } = useSWR(
  //   `http://localhost:3000/api/bukhari?search=${value}`,
  //   (url) =>
  //     fetch(url)
  //       .then((results) => results.json())
  //       .then((results) => results)
  // );

  // console.log(dataT.data);
  // function searchgan(e) {
  //   setValue(e.target.value);
  // }
  // console.log(hadits);
  const listHadits = hadits.map((res) => {
    return (
      <Card
        koleksi={res.koleksi}
        key={res.id}
        id={res.id}
        terjemah={res.terjemah}
        arab={res.arab}
        babNama={res.bab_nama}
        babArab={res.bab_arab}
        babId={res.bab_id}
        kitabNama={res.kitab_nama}
        kitabArab={res.kitab_arab}
        kitabId={res.kitab_id}
      />
    );
  });

  return (
    <div className="container mx-auto">
      <div className="hero text-center mt-32 mb-10 w-4/5 mx-auto">
        <h2 className="text-3xl font-extrabold bg-gradient-to-tr from-blue-700 to-cyan-500 bg-clip-text text-transparent p-3">
          Semua Hadits di Shahih Al-Bukhari
        </h2>
        <SearchBar hadits={hadits} setSearchResults={setSearchResults} />
      </div>
      {/* replace ku komponen */}
      <ListPage searchResults={searchResults} />
      {/* <!-- pagination --> */}
      <div className="pagination w-11/12 md:max-w-4xl flex justify-center mx-auto mt-10">
        <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-800 rounded px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-white">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">10</span>
                of
                <span className="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white dark:bg-slate-700 px-2 py-2 text-sm font-medium text-gray-500 dark:text-slate-200 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Previous</span>
                  {/* <!-- Heroicon name: mini/chevron-left --> */}
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 dark:bg-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-200 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Next</span>
                  {/* <!-- Heroicon name: mini/chevron-right --> */}
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end pagi --> */}
    </div>
  );
}
