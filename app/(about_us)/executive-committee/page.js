"use client";
import { useEffect, useState } from "react";
import EcCard from "../../../components/cards/EcCard";
import { useAllEcQuery, useGetEcByIdQuery } from "@/lib/feature/ec/ecApi";
import Loading from "../../../components/Loading";

export default function ExecutiveCommittee() {
  const { data: { data: ecs = [] } = {}, isLoading } = useAllEcQuery();

  const [ec, setEc] = useState(null);

  const { data: { data: ecData } = {} } = useGetEcByIdQuery(
    ecs[ecs?.length - 1]?.id
  );

  // ecs data

  // committee number
  const [cNUmber, setCNumber] = useState(null);

  useEffect(() => {
    setCNumber(ecs[ecs?.length - 1]?.name?.split("th")[0]);
    setEc(ecData);
  }, [ecData, ecs]);

  // handle change
  const handleChange = (id) => {
    setEc(ecs.find((ec) => ec.id === Number(id)));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (ecs.length > 0 && cNUmber && ec) {
    return (
      <section className="  theme-dark bg-[#fff] md:text-[20px] text-18px  py-5 text-black   h-full">
        <div className="   mx-auto xl:w-[1200px] lg:px-12 md:px-28 px-4">
          <div>
            <h1 className=" text-center md:mt-5 mt-3 mb-5 text-[#000000] dark:text-[#fc535a] xl:text-6xl lg:text-4xl  sm:text-3xl text-2xl font-bold">
              {ec?.name?.split("th")[0]}th Executive Committee of KIN
            </h1>
            <div>
              <span className=" font-bold mr-4">Executive Committee :</span>
              <select
                name="ec"
                className="py-2 px-3  bg-violet-600 text-white  rounded-md"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                defaultValue={ec.id}
              >
                {ecs?.map((ec, index) => (
                  <option value={ec?.id} key={index}>
                    {ec?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" grid  lg:grid-cols-3  mb-5 md:mt-16 mt-8 sm:grid-cols-2 mx-auto px-5 gap-10">
            {ec &&
              [...ec?.members]
                ?.sort((a, b) => a.index - b.index)
                .map((member, index) => (
                  <div key={index}>
                    <EcCard member={member} index={index * 0.5} />
                  </div>
                ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className=" min-h-screen  theme-dark bg-[#fff] md:text-[20px] text-18px  py-10 text-black ">
        <div className="   mx-auto xl:w-[1200px] lg:px-12 md:px-28 px-4">
          <h1 className=" text-center md:mt-5 mt-3 mb-5 text-[#fc535a] xl:text-4xl lg:text-3xl  sm:text-2xl text-xl font-bold">
            Couldn&apos;t find any Executive Commitee Data
          </h1>
        </div>
      </section>
    );
  }
}
