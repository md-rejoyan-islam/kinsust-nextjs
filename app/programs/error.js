"use client";

export default function Error({ error, reset }) {
  return (
    <div className="py-28 px-4 bg-[#f9fafc]   dark:bg-[#0f1e3329]  text-black dark:text-white text-center  ">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">
        {error?.message}
      </h1>
      <button
        className="mt-10 bg-violet-600 py-2 px-3 rounded-md text-lg text-white"
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </button>
    </div>
  );
}
