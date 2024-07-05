"use client";
import { useProgramsQuery } from "@/lib/feature/program/prorgramApi";
import React, { useCallback, useEffect, useState } from "react";
import ProgramCard from "../../components/cards/ProgramCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./program.css";
import Pagination from "../../components/pagination/Pagination";
import Loading from "@/components/Loading";

export default function Programs() {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: { data: programs = [], pagination = {} } = {}, isLoading } =
    useProgramsQuery(`?page=${page}`);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const search = createQueryString("page", page);
    router.push(pathname + "?" + search);
  }, [router.isReady, createQueryString, pathname, router, page]);

  // loading
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className=" bg-[#f9fafc]  min-h-screen dark:bg-[#0f1e3329]   pb-8">
      <div className="pt-10 pb-6 px-5 xl:w-[1200px]  lg:m-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center  grid-cols-1 overflow-hidden box-border ">
          {programs?.map((program, index) => {
            const title = program?.title.replace(
              "KIN",
              '<font color="#dc2626" style=font-family:"Arial Black"> KIN </font>'
            );

            return (
              <ProgramCard
                program={program}
                key={program?.id}
                title={title}
                index={index}
              />
            );
          })}
        </div>
        {/* if no data found  */}
        {programs.length === 0 && (
          <div>
            <h1 className="text-center px-4 text-black dark:text-white">
              No Data Found!
            </h1>
          </div>
        )}
      </div>
      {/* pagination  */}
      {programs.length > 0 && (
        <div className="pt-6 pb-2 mx-auto">
          <Pagination
            page={page}
            setPage={setPage}
            total={pagination?.totalPages || 1}
          />
        </div>
      )}
    </section>
  );
}
