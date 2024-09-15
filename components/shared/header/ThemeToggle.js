"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-hidden="true"
      className="relative focus:outline-none transition-all duration-700 delay-500"
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <div className="w-12 h-6 transition-all duration-300 rounded-full outline-none bg-slate-600 dark:bg-slate-400 dark:bg-primary-lighter" />
      <div className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-500  scale-110 rounded-full shadow-sm">
        <svg
          className={` w-32 hidden  dark:translate-x-6 dark:block p-[4px] rounded-full  bg-[#155e75] text-[#cffafe]  transition-transform ease-linear duration-500  `}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          id="theme-toggle-light-icon"
          viewBox="0 0 24 24"
          onClick={() => setTheme("light")}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <svg
          className={` w-32  dark:hidden block p-[3px] stroke-white rounded-full bg-[#44935d] text-primary-dark transition-all ease-linear duration-500  `}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          id="theme-toggle-dark-icon"
          stroke="currentColor"
          onClick={() => {
            setTheme("light");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
}

export default ThemeToggle;
