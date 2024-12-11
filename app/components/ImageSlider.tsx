"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="ImageSliderMainWrapper"
    >
      <SwiperSlide>
        <div className="bg-[url(/assets/assassinMain.jpg)] bg-cover bg-no-repeat relative w-full h-[90vh] flex items-center roomSingleComponentWrapper">
          <div className="flex flex-col gap-2 ml-[10%]">
            <h4 className="text-cutomGold font-heading text-[60px] font-normal">
              Assassin's Retreat Suite
            </h4>
            <span className="text-cutomGold font-heading text-[20px] font-normal">
              A Haven for the Elite - Where Comfort Meets Covert.
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/assets/assassinMain2.jpg"
          alt="Slide 2"
          className="w-full h-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
