import Link from "next/link";

const Card = ({ id, koleksi, terjemah, arab }) => {
  return (
    <div className="card bg-slate-50 dark:bg-slate-800 dark:text-slate-200 w-11/12 md:w-full border dark:border-slate-900 rounded text-sm">
      <div className="card-title border-b dark:border-slate-500 text-center font-semibold py-2 text-base">
        {koleksi} {id}
      </div>
      <div className="card-body p-4 text-center flex flex-col gap-4">
        <p className="arabic1 text-xl">{arab}</p>
        <p className="artinya">{terjemah}</p>
        <Link
          href={`/bukhari/${id}`}
          className="p-2 bg-blue-500 rounded hover:ring hover:text-white focus:ring text-center text-white font-semibold"
        >
          Lihat
        </Link>
      </div>
    </div>
  );
};

export default Card;
