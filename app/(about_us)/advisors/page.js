import { allAdvisors } from "./api";
import AdvisorCard from "../../../components/cards/AdvisorCard";

export default async function Advisors() {
  // advisors data
  const { data: advisors } = await allAdvisors();

  return (
    <section className="bg-[#fff]  py-5   text-black  bg-no-repeat   theme-dark  h-full px-4">
      <section className="pt-5 pb-7  rounded-md mx-auto border-black xl:w-[1150px] lg:px-12 md:px-28 px-4">
        <h1 className="font-serif dark:text-[#fc535a] xl:text-6xl md:text-5xl text-3xl text-center font-bold py-2">
          Our Honourable Advisors{" "}
        </h1>
        <p className="dark:text-white text-center xl:text-3xl text-xl sm:text-2xl">
          <span className="kin">KIN</span> is working with the guidance of a
          group of Honourable teachers of SUST
        </p>
      </section>
      <section className="">
        <div className="my-5   rounded-md py-5  border-black xl:w-[1150px] lg:px-12 md:px-28 px-4   gap-8 flex-wrap justify-center  flex  mx-auto">
          {advisors?.map((advisor, index) => (
            <AdvisorCard advisor={advisor} key={index} index={index} />
          ))}
        </div>

        {/* if advisors is empty */}

        {advisors?.length === 0 && (
          <div className="flex justify-center items-center">
            <p>No Advisors Found</p>
          </div>
        )}
      </section>
    </section>
  );
}
