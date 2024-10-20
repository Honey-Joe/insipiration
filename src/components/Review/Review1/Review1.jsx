import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard.";
import { ReviewData } from "../../../API/ReviewData";

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[100%] lg:w-[96%] mx-auto my-[98px]">
            <div className="my-5 mx-10">
            <div className="flex items-center justify-center">
            <div className="">
              <p className="font-[Poppins] text-[16px]  text-[#553cdf] text-center">
              Student Review
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="font-[Poppins] text-[#110c2d] font-bold text-[24px] md:text-[34px]">
            Our Students Feedback

            </p>
            <p className="text-[16px] font-[Poppins] text-[#777]">You'll find something to spark your curiosity and enhance</p>
          </div>

            </div>
          
          <div className=" w-full space-y-10">
            <Slider {...settings1}>
              {ReviewData.map((item) => (
                <ReviewCard
                  content={item.content}
                  imgurl={item.imgurl}
                  name={item.name}
                  desig={item.desig}
                ></ReviewCard>
              ))}
            </Slider>
            <Slider {...settings}>
              {ReviewData.map((item) => (
                <ReviewCard
                  content={item.content}
                  imgurl={item.imgurl}
                  name={item.name}
                  desig={item.desig}
                ></ReviewCard>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};



export default ReviewSection;
