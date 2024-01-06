import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import devAvatar from "./../../assets/images/client-avatar.png";
import { HiStar } from "react-icons/hi";
import { declarations } from "../../assets/data/testimonies";

const Testimonial = () => {
    return (
      <div className="mt-[30px] lg:mt-[50px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {declarations.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                  <img src={testimonial.avatar} alt="" />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-0-[2px]">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <HiStar
                          key={starIndex}
                          className="text-yellowColor w-[18px] h-5"
                        />
                      ))}
                    </div>
                  </div>
                </div>
  
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  {testimonial.opinion}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Testimonial;