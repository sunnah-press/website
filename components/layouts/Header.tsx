import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [gas, setGas] = useState(router.pathname);
  useEffect(() => {
    const mobileMenu = document.querySelector(".menu-mobile");
    const navigasi = document.querySelector(".navigasi");
    const menuChild = document.querySelector(".menu-child");
    const layarBlur = document.querySelector(".layar-blur");
    const menuCari = document.querySelector(".menu-cari");
    const header = document.querySelector(".header");

    const menuMode = document.querySelector(".menu-mode");

    // nav
    mobileMenu?.addEventListener("click", () => {
      navigasi?.setAttribute("data-visible", "true");
      navigasi?.classList.toggle("invisible");
      layarBlur?.classList.toggle("hidden");
      header?.classList.toggle("h-full");
    });

    menuCari?.addEventListener("click", () => {
      menuChild?.classList.toggle("hidden");
    });

    // mode

    const logo1 = document.querySelector(".logo1");
    const logo2 = document.querySelector(".logo2");

    menuMode?.addEventListener("click", () => {
      logo1?.classList.toggle("hidden");
      logo2?.classList.toggle("hidden");

      document.documentElement.classList.toggle("dark");
      if (document.documentElement.getAttribute("class") === "dark") {
        localStorage.theme = "dark";
      } else {
        localStorage.removeItem("theme");
      }
    });

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      logo1?.classList.toggle("hidden");
      logo2?.classList.toggle("hidden");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [gas]);

  return (
    <header className="header dark:bg-slate-900 border-b dark:border-slate-300/10 fixed w-full top-0 backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div className="container mx-auto p-3 flex justify-between items-center relative">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl text-slate-800 dark:text-white"
        >
          <img
            className="h-7"
            src="/assets/sunnah-brand/favicon-32x32.png"
            alt=""
          />
          <strong className="mb-2 mt-0">sunnah.press</strong>
        </Link>

        <button
          className="menu-mobile md:hidden p-1 border rounded hover:bg-slate-700/20 dark:bg-slate-600 dark:border-slate-400/10 dark:hover:bg-sky-700 dark:focus:bg-sky-700 z-50"
          aria-controls="primary-nav"
        >
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="none">
            <path
              className="fill-slate-900 dark:fill-slate-200"
              d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
              c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
              s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
              c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
            ></path>
          </svg>
        </button>

        <nav
          className="navigasi fixed bg-white border-l border-slate-700/5 dark:bg-slate-800 top-0 right-0 bottom-0 left-1/4 h-screen z-40 overflow-y-auto invisible md:visible md:static md:left-0 md:h-auto md:rounded"
          id="primary-nav"
          role="dialog"
          data-visible="false"
        >
          <ul className="mt-20 pl-3 text-slate-700 text-base font-bold dark:text-slate-400 md:flex md:m-0 md:px-3">
            <li className="p-2">
              <Link
                href="/"
                className="group flex items-center gap-3 hover:text-slate-600 focus:text-slate-600 dark:hover:text-slate-300 dark:focus:text-slate-300"
              >
                <div className="dark:bg-slate-700 w-6 h-6 rounded flex justify-center items-center ring-1 group-hover:dark:bg-emerald-600 group-focus:dark:bg-emerald-600 group-hover:ring-slate-900/20 group-focus:ring-slate-900/20 ring-slate-900/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 dark:fill-slate-500 fill-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="group-hover:dark:fill-emerald-300 group-focus:dark:fill-emerald-300"
                      d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"
                    />
                    <path
                      className="group-hover:dark:fill-emerald-300 group-focus:dark:fill-emerald-300"
                      d="M9 22V12h6v10M2 10.6L12 2l10 8.6"
                    />
                  </svg>
                </div>
                Beranda
              </Link>
            </li>
            <li className="p-2">
              <button className="menu-cari group flex items-center gap-3 hover:text-slate-600 focus:text-slate-600 dark:hover:text-slate-300 dark:focus:text-slate-300">
                <div className="dark:bg-slate-700 w-6 h-6 rounded flex justify-center items-center ring-1 ring-slate-900/5 group-hover:dark:bg-blue-600 group-focus:dark:bg-blue-600 group-hover:ring-slate-900/20 group-focus:ring-slate-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 dark:fill-slate-600 fill-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      className="group-hover:dark:fill-blue-300 group-focus:dark:fill-blue-300"
                      cx="11"
                      cy="11"
                      r="8"
                    ></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                Menu Pencarian
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 12l6 6 6-6" />
                </svg>
              </button>

              <ul className="menu-child py-3 pl-9 flex flex-col gap-4 text-slate-800 font-semibold text-sm md:absolute md:dark:bg-slate-800 md:p-6 md:gap-4 md:rounded md:bg-white md:mt-5 hidden">
                <li>
                  <Link
                    href="/search"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Global
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bukhari"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Shahih Bukhari
                  </Link>
                </li>

                <li>
                  <Link
                    href="/muslim"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Shahih Muslim
                  </Link>
                </li>
                <li>
                  <Link
                    href="/abudawud"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Sunan Abu Dawud
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tirmidzi"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Jami&apos; At-Tirmidzi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nasai"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Sunan Nasa&apos;i
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ibnumajah"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Sunan Ibnu Majah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/malik"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Muwatha&apos; Malik
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ahmad"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Musnad Ahmad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/darimi"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Sunan Darimi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/riyadhus"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Riyadhus Shalihin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/syafii"
                    className="dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 dark:focus:text-slate-300"
                  >
                    Cari di Musnad Syafii
                  </Link>
                </li>
              </ul>
            </li>
            <li className="p-2">
              <Link
                href="/donation"
                className="group flex items-center gap-3 hover:text-slate-600 focus:text-slate-600 dark:hover:text-slate-300 dark:focus:text-slate-300"
              >
                <div className="dark:bg-slate-700 w-6 h-6 rounded flex justify-center items-center ring-1 ring-slate-900/5 group-hover:dark:bg-red-600 group-focus:dark:bg-red-600 group-hover:ring-slate-900/20 group-focus:ring-slate-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 dark:fill-slate-500 fill-red-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f87171"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="fill-red-400"
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path>
                  </svg>
                </div>
                Donasi
              </Link>
            </li>
            <li className="md:ml-10 p-2">
              <button className="menu-mode group flex items-center gap-3 hover:text-slate-600 focus:text-slate-600 dark:hover:text-slate-300 dark:focus:text-slate-300">
                <div
                  className="dark:bg-slate-700 w-6 h-6 rounded flex justify-center items-center ring-1 ring-slate-900/5 group-hover:dark:bg-blue-600 group-focus:dark:bg-blue-600 group-hover:ring-slate-900/20 group-focus:ring-slate-900/20"
                  // onClick={menuModeToggle}
                >
                  <span className="logo1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="light-mode w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                  </span>

                  <span className="logo2 hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        className="dark:fill-amber-300"
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </button>
            </li>
          </ul>
        </nav>
        <div className="layar-blur fixed top-0 right-0 bottom-0 left-0 bg-transparent backdrop-blur h-screen hidden"></div>
      </div>
    </header>
  );
}
