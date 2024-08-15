"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "./Slider.css";
import slidersData from "./data";

const Slider = () => {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto overflow-hidden dark:bg-black">
        <Swiper
          className="dark:bg-black/15 bg-white"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={1}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 250,
            stretch: 0,
            depth: 100,
            modifier: 0,
            slideShadows: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3500, // 3.5s
            disableOnInteraction: false,
          }}
          speed={2500} // 2.5s
          loop={true}
          pagination={{
            clickable: true,
          }}
        >
          {slidersData?.map((slider, index) => (
            <SwiperSlide className="relative overflow-hidden" key={index}>
              <Image
                src={`/images/sliders/${slider?.photo}`}
                alt={slider?.title}
                width={610}
                height={360}
                // priority={true}
                className="h-full relative w-full  brightness-75 "
                loading="eager"
                placeholder="blur"
                blurDataURL="/images/blur/blur.webp"
              />
              <div className="bottom-16 left-0 absolute h-full flex justify-end  flex-col gap-6 mx-auto w-full ">
                <p className="backdrop-blur-[2px] text-white sm:text-2xl lg:text-4xl text-[17px] inline-block   px-16 md:px-0 md:w-2/3 right-0 mx-auto text-center ">
                  {slider?.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
