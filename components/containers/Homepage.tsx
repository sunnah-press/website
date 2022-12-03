import Link from "next/link";

export default function Homepage() {
  return (
    <div className="container mx-auto">
      <div className="hero text-center mb-10 w-4/5 mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
          Kumpulan Buku-buku Hadits Nabi Muhammad
        </h1>
        <h2 className="text-3xl font-extrabold bg-gradient-to-tr from-blue-700 to-cyan-500 bg-clip-text text-transparent p-3">
          (صلى الله عليه و سلم)
        </h2>
        {/* <form action="" className="flex justify-center mt-10">
          <div className="w-full h-11 bg-slate-500 block max-w-sm rounded-tl-lg rounded-bl-lg">
            <input
              type="search"
              name=""
              id=""
              className="text-white w-full text-justify h-10 bg-slate-500 max-w-sm outline-none indent-4 rounded-tl-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-sky-700 p-1 rounded-tr-lg rounded-br-lg"
          >
            <svg className="h-6 w-6" viewBox="0 0 20 20">
              <path
                className="fill-white"
                d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
              ></path>
            </svg>
          </button>
        </form> */}
      </div>
      <div className="grid w-11/12 justify-items-center gap-4 md:grid-cols-2 md:w-3/5 mx-auto max-w-2xl">
        <Link
          href="/bukhari"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Shahih Al-Bukhari</div>
          <div className="text-arab font-bold">صحيح البخاري</div>
        </Link>
        <Link
          href="/muslim"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Shahih Muslim</div>
          <div className="text-arab font-bold">صحيح مسلم</div>
        </Link>
        <Link
          href="/abudawud"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Sunan Abu Dawud</div>
          <div className="text-arab font-bold">سنن أبي داود</div>
        </Link>
        <Link
          href="/tirmidzi"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Jami&apos; At-Tirmidzi</div>
          <div className="text-arab font-bold">جامع الترمذي </div>
        </Link>
        <Link
          href="/nasai"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Sunan Nasa&apos;i</div>
          <div className="text-arab font-bold">سنن النسائي</div>
        </Link>
        <Link
          href="/ibnumajah"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Sunan Ibnu Majah</div>
          <div className="text-arab font-bold">سنن ابن ماجه</div>
        </Link>
        <Link
          href="/malik"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Muwatha&apos; Malik</div>
          <div className="text-arab font-bold">موطأ مالك</div>
        </Link>
        <Link
          href="/ahmad"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Musnad Ahmad</div>
          <div className="text-arab font-bold">مسند أحمد</div>
        </Link>
        <Link
          href="/darimi"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Sunan Darimi</div>
          <div className="text-arab font-bold">سنن الدارمي</div>
        </Link>
        <Link
          href="/riyadhus"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Riyadhus Shalihin</div>
          <div className="text-arab font-bold">رياض الصالحين </div>
        </Link>
        <Link
          href="/syafii"
          className="flex flex-wrap gap-2 border border-white/25 p-2 justify-center w-full rounded bg-blue-600 text-white shadow shadow-slate-900 hover:bg-blue-900 focus:bg-blue-900 hover:text-white/50 focus:text-white/50 max-w-sm"
        >
          <img src="/assets/book.png" alt="book" width="30" />
          <div className="text-id font-bold">Musnad Syafii</div>
          <div className="text-arab font-bold">مسند الامام الشافعي</div>
        </Link>
      </div>
    </div>
  );
}
