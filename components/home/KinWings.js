import WingsCard from "./WingsCard";

export default function KinWings() {
  return (
    <section className="lg:py-16 py-8  md:py-12 bg-[#f7f9fc] border-b   md:text-[20px] border-[#eeeeee6a] dark:border-[#1f213f] text-[18px]  theme-dark">
      <div className="xl:w-[1200px] text-black  px-5 flex-wrap lg:flex-nowrap justify-center  flex   lg:gap-6 gap-6 mx-auto     dark:text-white ">
        <WingsCard
          index={0}
          path="/social-awareness"
          svg={"socialAwarenessSVG"}
          title="WE CONSULT"
          content="We raise awareness among people to make them aware of their rights and stop violent activities that happen towards women."
        >
          <p className=" dark:text-[#c9d8f8]   py-3">
            We raise awareness among people to make them aware of their rights
            and stop violent activities that happen towards women.
          </p>
        </WingsCard>
        <WingsCard
          index={1}
          svg="charitySVG"
          path={"/charity&aid"}
          title="WE SERVE"
          content="We arrange charity programs for people in need to provide monetary support ."
        >
          <p className=" dark:text-[#c9d8f8]   py-3">
            We arrange charity programs for people in need to provide monetary
            support .
          </p>
        </WingsCard>
        <WingsCard
          index={2}
          svg={"bloodDonationSVG"}
          path={"/blood-donation"}
          content="We find and provide blood for patients in need, and aim to motivate people to donate blood."
          title=" WE FIND"
        >
          <p className=" dark:text-[#c9d8f8]   py-3">
            We find and provide blood for patients in need, and aim to motivate
            people to donate blood.
          </p>
        </WingsCard>
        <WingsCard
          index={3}
          path={"/kin-school"}
          svg={"kinSchoolSVG"}
          title="WE EDUCATE"
          content={
            ` We educate children living around the` +
            <span className="font-semibold">SUST</span> +
            ` area, with a view to  pass on the light of education to every corner of society.`
          }
        >
          <p className=" dark:text-[#c9d8f8]   py-3">
            We educate children living around the{" "}
            <span className="font-semibold">SUST</span> area, with a view to
            pass on the light of education to every corner of society.
          </p>
        </WingsCard>
        <WingsCard
          path={"/winter-cloth-distribution"}
          index={4}
          svg={"winterCLothSVG"}
          title=" WE PROVIDE CARE"
          content=" We provide winter clothes for cold-stricken poor families living in the remote corners of the country."
        >
          <p className=" dark:text-[#c9d8f8]   py-3">
            We provide winter clothes for cold-stricken poor families living in
            the remote corners of the country.
          </p>
        </WingsCard>
      </div>
    </section>
  );
}
