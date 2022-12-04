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
