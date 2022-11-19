export default function Card(props) {
  return (
    <div className="card bg-slate-50 dark:bg-slate-800 dark:text-slate-200 w-11/12 md:w-full border dark:border-slate-900 rounded text-sm">
      <div className="card-title border-b dark:border-slate-500 text-center font-semibold py-2 text-base">
        {props.koleksi} {props.id}
      </div>
      <div className="card-body p-4 text-center flex flex-col gap-4">
        <p className="arabic1 text-xl">{props.arab}</p>
        <p className="artinya">{props.terjemah}</p>
        <button className="card-title p-2 bg-blue-500 rounded hover:ring focus:ring text-center text-white font-semibold">
          Lihat
        </button>
      </div>
    </div>
  );
}
