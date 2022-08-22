import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { slider } from "../data";
const TestimonialSlider = () => {
  return (
    <Swiper>
      {slider.map((slide, index) => {
        //destruture slide
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]">
            <p>{message}</p>
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <div>{name}</div>
                <div>{email}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
