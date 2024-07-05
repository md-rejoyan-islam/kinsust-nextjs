import Image from "next/image";
import ScrollInViewMotion from "../motion/ScrollInViewMotion";
import PhotoPreview from "../PhotoPreview";

export default function Achievement() {
  return (
    <section className=" text-black  theme-dark dark:border-[#1f213f]  md:text-[20px] text-[18px] bg-[#fcfdfe] border-[#eeeeee90] border-b ">
      <div className=" lg:py-16 py-8 md:py-12 mx-auto  xl:w-[1200px] text-justify px-4">
        <div className=" m-auto">
          {/* title */}
          <ScrollInViewMotion
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewOnce={true}
          >
            <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] sm:text-5xl font-bold text-center pt-2 lg:pt-0">
              Our{" "}
              <span className="font-serif text-[#f41e1e] dark:text-[#fc535a]">
                Achievements
              </span>
            </h1>
          </ScrollInViewMotion>

          <p className="  md:pt-6 pt-4      text-justify ">
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              KIN
            </span>{" "}
            was awarded the{" "}
            <span className="font-bold">Joy Bangla Youth Award</span> by{" "}
            <span className="font-bold">Young Bangla </span>
            for being one of the 50 best organizations among the other 1300
            organizations. Additionally,{" "}
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              KIN
            </span>{" "}
            has been honored by{" "}
            <span className="font-bold">SANDHANI (SOMC)</span> for 9 times for
            being the best{" "}
            <span className="font-semibold">
              Non-Medical Blood Donation Organization
            </span>
            .
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 gap-5 my-6 justify-items-center px-4">
            <ScrollInViewMotion
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 1 }}
              viewOnce={true}
            >
              <PhotoPreview src="/images/homepage/joyBanglaAward.jpg">
                <Image
                  src="/images/homepage/joyBanglaAward.jpg"
                  alt="joy bangla award kinsust kin school"
                  className="h-[350px] w-min md:w-full border-8 rounded-md border-[#ffffff] dark:border-[#32265a] cursor-pointer"
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                />
              </PhotoPreview>
            </ScrollInViewMotion>
            <ScrollInViewMotion
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 1 }}
              viewOnce={true}
            >
              <PhotoPreview src="/images/homepage/second.jpg">
                <Image
                  src="/images/homepage/second.jpg"
                  alt="kinsust kin school award  "
                  className=" h-[350px] w-min md:w-full border-8 rounded-md border-[#ffffff] dark:border-[#32265a6f] cursor-pointer"
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                />
              </PhotoPreview>
            </ScrollInViewMotion>
          </div>
        </div>
      </div>
    </section>
  );
}
