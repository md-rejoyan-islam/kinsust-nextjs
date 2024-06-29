"use client";

import { useDispatch, useSelector } from "react-redux";
import { getAllPrograms } from "./slice/programsApiSlice";
import { ScaleLoader } from "react-spinners";
import "./program.scss";
import ProgramCard from "../components/program/ProgramCard";

export default function Programs() {
  const { programs, pagination } = useSelector((state) => state.programs);
  const dispatch = useDispatch();

  // pagination
  const handlePagination = (value) => {
    const { currentPage, nextPage, previousPage } = pagination;
    let page = currentPage;

    switch (value) {
      case "next":
        page = nextPage;
        break;
      case "previous":
        page = previousPage;
        break;
      default:
        page = value;
        break;
    }
    dispatch(getAllPrograms({ page }));
  };
  if (programs.length > 0) {
    return (
      <section className=" bg-[#f9fafc]  min-h-screen dark:bg-[#0f1e3329]   pb-8">
        <div className="pt-10 pb-6 px-5 xl:w-[1200px]  lg:m-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center  grid-cols-1 overflow-hidden box-border ">
            {programs?.map((program) => {
              const title = program?.title.replace(
                "KIN",
                '<font color="#dc2626" style=font-family:"Arial Black"> KIN </font>'
              );

              return (
                <ProgramCard
                  program={program}
                  key={program?._id}
                  title={title}
                />
              );
            })}
          </div>
        </div>
        {/* pagination */}
        {programs.length > 0 ? (
          <div className="pt-4 mx-auto text-center">
            <div className="join  text-center ">
              <button
                onClick={() => {
                  handlePagination("previous");
                }}
                className="join-item btn   dark:bg-violet-700 hover:dark:bg-violet-500  z-10 bg-violet-500 hover:bg-violet-700 disabled:bg-violet-500 dark:disabled:bg-violet-500  disabled:text-white dark:hover:bg-violet-800 text-white hover:text-white border-none "
                disabled={!pagination?.previousPage ? true : false}
              >
                Previous
              </button>
              <div className="w-[2.8px] h-full "></div>

              {new Array(pagination?.totalPages).fill(null).map((_, index) => (
                <span key={index} className="mr-[2px]">
                  <button
                    className={`join-item btn  dark:bg-violet-700 hover:dark:bg-violet-500 ${
                      pagination.currentPage === index + 1
                        ? "bg-violet-700 dark:bg-violet-800 dark:hover:bg-violet-800"
                        : "bg-violet-500 "
                    }  hover:bg-violet-700 dark:hover:bg-violet-800 text-white border-none  z-10  hover:text-white border-violet-300`}
                    onClick={() => {
                      handlePagination(index + 1);
                    }}
                  >
                    {index + 1}
                  </button>
                  <div className="w-[2.8px] h-full "></div>
                </span>
              ))}

              <button
                className="join-item btn   dark:bg-violet-700 hover:dark:bg-violet-500  z-10 bg-violet-500 hover:bg-violet-700 dark:disabled:bg-violet-500 disabled:bg-violet-500 disabled:text-white text-white dark:hover:bg-violet-800 hover:text-white border-none"
                onClick={() => {
                  handlePagination("next");
                }}
                disabled={!pagination?.nextPage ? true : false}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center px-4 text-black dark:text-white">
              No Data Found!
            </h1>
          </div>
        )}
      </section>
    );
  } else {
    return (
      <div className="top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center">
        <div className="text-center">
          <ScaleLoader
            color="#36d7b7"
            height={40}
            loading={true}
            margin={3}
            radius={3}
            width={5}
          />
        </div>
      </div>
    );
  }
}
