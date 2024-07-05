import Image from "next/image";
import PhotoPreview from "../PhotoPreview";
import ScrollInViewMotion from "../motion/ScrollInViewMotion";

export default function About() {
  return (
    <section className="  bg-[#fff] border-b dark:border-[#1f213f]    border-[#eeeeee6a] dark:text-[#cacfd5] theme-dark md:text-[20px] text-[18px] text-black">
      <div className="lg:py-16 py-8 md:py-12 mx-auto hero  xl:w-[1200px] text-justify">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0 m-0 px-4 lg:gap-24 ">
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
              <PhotoPreview src={"/images/homepage/about.jpg"}>
                <Image
                  src="/images/homepage/about.jpg"
                  className="rounded-lg shadow-2xl border-8  border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                  width={500}
                  height={300}
                  alt="21 february kin sust"
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                />
              </PhotoPreview>
            </div>
          </ScrollInViewMotion>

          <div className="   basis-7/12 relative p-0 m-0">
            <ScrollInViewMotion
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewOnce={true}
            >
              <h1 className="font-serif  dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0  ">
                <span className="dark:text-white">About</span>{" "}
                <span className="text-[#f41e1e] dark:text-[#fc535a]">Us</span>
              </h1>
            </ScrollInViewMotion>

            <p className="    md:pt-6 pt-4   text-justify ">
              The word {'"'}
              <span className="kin">KIN</span>
              {'"'} stands for {'"Relative"'}. <span className="kin">KIN </span>{" "}
              was founded in the year 2003 with the help of some young dreamers
              from <span className="font-semibold">SUST</span>.
            </p>
            <p className=" md:pt-6 pt-4   text-justify">
              <span className="kin">KIN</span> was founded with a view to
              helping the destitute people living around the university area
              with the basic necessities of human life.{" "}
              <span className="kin">KIN</span> helps them as a relative helps us
              in our time of emergency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
