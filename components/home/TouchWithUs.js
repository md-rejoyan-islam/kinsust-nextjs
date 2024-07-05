import Link from "next/link";
import ScrollInViewMotion from "../motion/ScrollInViewMotion";
import PhotoPreview from "../PhotoPreview";
import Image from "next/image";
import Subscriber from "./subscriber/Subscriber";

export default function TouchWithUs() {
  return (
    <section className="   theme-dark bg-[#f8fafc]   py-16 md:text-[20px] text-[18px]  text-black  ">
      <div className=" xl:w-[1200px]   mx-auto   lg:py-16 py-8 md:py-12   text-justify px-4">
        <ScrollInViewMotion
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          viewOnce={true}
        >
          <figure className="px-4">
            <PhotoPreview src="/images/homepage/getwithus.jpg">
              <Image
                src="/images/homepage/getwithus.jpg"
                alt="kinsust kin school activities"
                width={1000}
                height={600}
                className=" mx-auto rounded-md border-8  border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                placeholder="blur"
                blurDataURL="/images/blur/blur.webp"
                loading="lazy"
              />
            </PhotoPreview>
          </figure>
        </ScrollInViewMotion>
      </div>
      <div className="md:w-[650px]   mx-auto px-4">
        <ScrollInViewMotion
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewOnce={true}
        >
          <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0 ">
            Get In{" "}
            <span className="text-[#f41e1e] dark:text-[#fc535a] font-serif">
              Touch With
            </span>{" "}
            Us
          </h1>
        </ScrollInViewMotion>

        <p className="  md:pt-6 pt-4    text-justify">
          Stay up-to-date by subscribing to our{" "}
          <span className="font-semibold">newsletter</span>.{" "}
          <Link
            href={"/register"}
            className="text-[#f41e1e] font-semibold dark:text-[#f41e1e] "
          >
            {" "}
            Create an account{" "}
          </Link>
          to receive the latest updates on events, national and international
          days, and much more.
        </p>
      </div>

      {/* subscriber */}
      <Subscriber />
    </section>
  );
}
