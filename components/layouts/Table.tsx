import React from "react";

export const Table = ({ hadith }) => {
  return (
    <>
      <div className="mt-10 table border dark:bg-slate-800 dark:border-slate-800 rounded mx-auto md:max-w-4xl w-11/12 bg-slate-100">
        <table className="table-auto text-slate-800 dark:text-slate-50 rounded text-center text-sm">
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
              <td className="p-2">{hadith?.kitab_id ? hadith.kitab_id : ""}</td>
              <td className="p-2">
                {hadith?.kitab_nama ? hadith.kitab_nama : ""}
              </td>
              <td className="p-2 arabic1 text-base md:text-lg">
                {hadith?.kitab_arab ? hadith.kitab_arab : ""}
              </td>
            </tr>
            <tr>
              <th className="p-2">Bab:</th>
              <td className="p-2">{hadith?.bab_id ? hadith.bab_id : ""}</td>
              <td className="p-2">{hadith?.bab_nama ? hadith.bab_nama : ""}</td>
              <td className="p-2 arabic1 text-base md:text-lg">
                {hadith?.bab_arab ? hadith.bab_arab : ""}
              </td>
            </tr>
            <tr>
              <th className="p-2">Hadits:</th>
              <td className="p-2">{hadith?.id ? hadith.id : ""}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="hadith mt-10 table border dark:bg-slate-800 dark:border-slate-800 rounded mx-auto md:max-w-4xl w-11/12 bg-slate-100 text-slate-800 dark:text-slate-200">
        <div className="flex flex-col">
          <div className="title text-center p-3 border-b border-slate-300 dark:border-slate-500 font-semibold">
            {hadith?.koleksi ? hadith.koleksi : ""}{" "}
            {hadith?.id ? hadith.id : ""}
          </div>
          <div className="body flex flex-col gap-4 p-3 md:flex-row">
            <div className="text text-center md:text-left">
              {hadith?.terjemah ? hadith.terjemah : ""}
            </div>
            <div className="arabic1 text-lg md:text-xl text-right">
              {hadith?.arab ? hadith.arab : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
