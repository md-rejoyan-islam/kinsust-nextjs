export default function MiddleBtn({ active, value, setActive }) {
  return (
    <button
      className={`${
        active === value
          ? "dark:bg-violet-900 text-white  bg-gray-900   shadow-md shadow-gray-900/10  hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none     "
          : " dark:hover:bg-violet-500/10  text-gray-900   hover:bg-gray-900/10"
      }  max-w-[40px] select-none rounded-lg h-10 max-h-[40px] w-10  relative   text-center align-middle font-sans text-xs font-medium uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  dark:text-white `}
      onClick={() => setActive(value)}
    >
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {value}
      </span>
    </button>
  );
}
