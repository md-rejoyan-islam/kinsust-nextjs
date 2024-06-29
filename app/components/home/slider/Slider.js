"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "./slider.css";
import { useEffect, useState } from "react";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await fetch(`https://server.kinsust.org/api/v1/sliders`);
        const data = await res.json();
        setSliders(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSliders();
  }, []);

  //   const { sliders } = useSelector((state) => state.sliders);

  return (
    <section>
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <Swiper
          className="dark:bg-[#1a123a] bg-[#fff]"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={1}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 250,
            stretch: 0,
            depth: 100,
            modifier: 1,
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
          {sliders?.map((slider, index) => (
            <SwiperSlide className="relative overflow-hidden" key={index}>
              <Image
                src={`https://server.kinsust.org/public/images/sliders/${slider?.slider_photo}`}
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
