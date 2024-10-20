import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { author } from "../../assets/image";
import { Star } from "lucide-react";

export default function App() {
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center mb-10 text-center">
            <div className="max-w-lg">
              <h3 className="text-gray-500 text-sm uppercase tracking-wide">
                Testimonials
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Students Have To Say
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt labore dolore magna aliqua enim ad
                minim.
              </p>
              <button className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition duration-300">
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center gap-5 mx-3 w-[300px]">
                <img
                  src={author}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="">
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    corporis ullam praesentium, repellat odio cumque volupta
                  </p>
                  <div>
                    <div className="flex gap-2 my-3">
                      <div className="">
                        <Star fill="#F57104" stroke="#F57104"></Star>
                      </div>
                      <div className="">
                        <Star fill="#F57104" stroke="#F57104"></Star>
                      </div>
                      <div className="">
                        <Star fill="#F57104" stroke="#F57104"></Star>
                      </div>
                      <div className="">
                        <Star fill="#F57104" stroke="#F57104"></Star>
                      </div>
                      <div className="">
                        <Star fill="#F57104" stroke="#F57104"></Star>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 text-lg">
                    Masum Billah
                  </h4>
                  <p className="text-gray-500">Web DEVELOPER</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center gap-6 mx-3 w-[300px]">
                <img src={author} className="w-24 h-24 rounded-full" />
                <div>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    corporis ullam praesentium, repellat odio cumque volupta
                  </p>
                  <div className="flex gap-2 my-3">
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Masum Billah
                  </h4>
                  <p className="text-gray-500">Web DEVELOPER</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center gap-6 w-[300px]">
                <img
                  src={author}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    corporis ullam praesentium, repellat odio cumque volupta
                  </p>
                  <div className="flex gap-2 my-3">
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                    <div className="">
                      <Star fill="#F57104" stroke="#F57104"></Star>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Masum Billah
                  </h4>
                  <p className="text-gray-500">Web DEVELOPER</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
