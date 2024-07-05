"use client";
import { useEffect, useState } from "react";
import MiddleBtn from "./MiddleBtn";
import NextBtn from "./NextBtn";
import PreviewBtn from "./PreviewBtn";

export default function Pagination({ page, setPage, total }) {
  // max page number show
  const totalShow = total > 5 ? 5 : total;

  const [ranges, setRanges] = useState([]);

  useEffect(() => {
    const firtNumber = Math.max(1, page - totalShow + 1);

    const newRanges = Array.from({ length: totalShow }, (_, index) => {
      return firtNumber + index;
    });
    setRanges(newRanges);
  }, [page, total, totalShow]);

  return (
    <div className="flex items-center gap-4 justify-center">
      <PreviewBtn setActive={setPage} active={page} />
      <div className="flex items-center gap-2">
        {ranges?.map((value) => {
          return (
            <MiddleBtn
              key={value}
              value={value}
              active={page}
              setActive={setPage}
            />
          );
        })}
      </div>
      <NextBtn setActive={setPage} active={page} total={total} />
    </div>
  );
}
