import Link from "next/link";

export const Pagination = ({ numHadits, slug, totalHadits }) => {
  return (
    <div className="pagination w-11/12 md:max-w-4xl flex justify-center mx-auto mt-10">
      <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-800 rounded px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between">
          {parseInt(numHadits) - 1 ? (
            <Link
              href={`/${slug}/${parseInt(numHadits) - 1}`}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </Link>
          ) : (
            <div className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </div>
          )}
          {parseInt(numHadits) != totalHadits ? (
            <Link
              href={`/${slug}/${parseInt(numHadits) + 1}`}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </Link>
          ) : (
            <div className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-slate-700 dark:text-slate-400 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
