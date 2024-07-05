import Image from "next/image";
import PhotoPreview from "../PhotoPreview";
import ScrollInViewMotion from "../motion/ScrollInViewMotion";

export default function SponsorAChild() {
  return (
    <section className="bg-[rgba(255,2554,254,0.99)] border-b  dark:bg-[#0f1829]  border-[#eeeeee6a] dark:text-[#cacfd5] dark:border-[#1f213f] md:text-[20px] text-[18px] text-black">
      <div className="lg:py-16 py-8 md:py-12 mx-auto hero  xl:w-[1200px] text-justify">
        <div className="relative hero-content flex-col-reverse lg:flex-row-reverse lg:gap-16">
          <ScrollInViewMotion
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            viewOnce={true}
          >
            <div className="  basis-5/12 ">
              <PhotoPreview src={"/images/homepage/sponser.webp"}>
                <Image
                  src="/images/homepage/sponser.webp"
                  style={{ borderRadius: "0px 100px 0px 100px" }}
                  alt="our child kinsust kinschool"
                  className="border-8 rounded-md border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                />
              </PhotoPreview>
            </div>
          </ScrollInViewMotion>

          {/* bounce */}
          <div className="hidden lg:block">{/* <Bounce /> */}</div>
          <div className=" basis-7/12 relative">
            <ScrollInViewMotion
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              viewOnce={true}
            >
              <h1 className=" font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0  ">
                Sponsor a{" "}
                <span className="text-[#f41e1e] dark:text-[#fc535a]">
                  Child
                </span>
              </h1>
            </ScrollInViewMotion>

            <p className=" sm:px-4  md:pt-6 pt-4    text-justify">
              You can now sponsor a student of <span className="kin">KIN</span>{" "}
              <span className="font-semibold">School </span>
              through carrying their educational expenses, providing them
              clothes & other financial needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
