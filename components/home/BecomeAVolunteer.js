import React from "react";
import ScrollInViewMotion from "../motion/ScrollInViewMotion";
import Image from "next/image";
import PhotoPreview from "../PhotoPreview";

export default function BecomeAVolunteer() {
  return (
    <section className="dark:border-[#1f213f] border-[#eeeeee97]   dark:bg-[#0f1829]  dark:text-[#cacfd5]  py-10 md:px-7 text-black md:text-[20px] text-[18px] bg-[#fff] border-b  ">
      <div className="xl:w-[1200px] m-auto grid lg:grid-cols-2  gap-10      lg:py-16 py-8 md:py-12  ">
        <div>
          <ScrollInViewMotion
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewOnce={true}
          >
            {" "}
            <h1 className="font-serif dark:text-[#fff] lg:text-5xl text-[36px] font-bold text-center pt-2 lg:pt-0 pb-4 lg:pb-0">
              <span className="font-serif px-4">Become A </span>
              <span className="dark:text-[#fc535a] text-[#f41e1e] font-serif">
                Volunteer!
              </span>
            </h1>
          </ScrollInViewMotion>

          <p className="lg:px-7 md:px-5 px-4   md:pt-6 pt-4     text-justify">
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              KIN
            </span>{" "}
            encourages everyone who wishes to work for the poor, helpless people
            and bring a positive change in their lives to be a part of it. Every
            year, we launch <span className="font-bold">Organizing Week</span>{" "}
            where you can collect our membership forms. Through a viva process,
            you can be selected as our{" "}
            <span className="font-bold">General Member</span>.
          </p>
          <p className="lg:px-7 md:px-5 px-4   md:pt-6 pt-4     text-justify">
            The other most convenient way of doing so is by joining
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              {" "}
              KIN
            </span>{" "}
            <span className="font-bold">School</span>. As the workforce of this
            place, there are some young helpful students from{" "}
            <span className="font-bold">SUST</span> who voluntarily come and
            work for the children wholeheartedly.{" "}
            <span className="text-red-600 font-['Arial'] dark:text-red-600">
              KIN
            </span>{" "}
            encourages new faces every year to come and join them.
          </p>
        </div>
        <div className="self-center px-4 md:px-0 mx-auto">
          <ScrollInViewMotion
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            viewOnce={true}
          >
            <PhotoPreview src="/images/homepage/volunteer.jpeg">
              <Image
                src="/images/homepage/volunteer.jpeg"
                alt="kinsust kin school volunteer"
                className="shadow-xl border-8 rounded-md border-[#ffffff] dark:border-[#beb6d76f] cursor-pointer"
                width={500}
                height={500}
                style={{ borderRadius: "022px 86px 0px 0140px" }}
                placeholder="blur"
                blurDataURL="/images/blur/blur.webp"
                loading="lazy"
              />
            </PhotoPreview>
          </ScrollInViewMotion>
        </div>
      </div>
    </section>
  );
}
