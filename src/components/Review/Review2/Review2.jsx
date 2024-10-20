import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow/SampleNextArrow";
import { blog1_1, blog1_2, blog1_3 } from "../../../assets/image";
import SamplePrevArrow from "./SamplePrevArrow/SamplePrevArrow";
export default function SimpleSlider() {


    
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow></SampleNextArrow>,
    prevArrow:<SamplePrevArrow></SamplePrevArrow>,
    slidesToScroll: 1,
    autoPlay : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    
      
  };
  return (
    <>

    
    <div className="max-w-[100%]">
        <div  className="w-[80%] mx-auto grid grid-cols-1">
        <div className="w-1/2 pr-4">
          <h2 className="text-purple-700 text-xl font-bold">TESTIMONIALS</h2>
          <h3 className="text-2xl font-semibold mt-2">Students Feedback</h3>

        </div>
        <div className="flex gap-5">
    <Slider {...settings} className="w-[50%]">
      <div className="w-[50%] mx-auto ">
      <div className="bg-white p-6 rounded-lg  mt-4">
        <div className="flex gap-5">
            <div className="">
            <div className="flex items-center mb-2">
              {/* Star rating */}
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐☆</span>
            </div>
            <p className="text-gray-600 mb-4">
              Nullam dignissim ante scelerisque the is euismod fermentum odio sem
              semper the is erat a feugiat leo urna eget eros. Duis Aenean a
              imperdiet risus. Aliquam pellentesque.
            </p>
            <p className="font-bold text-lg">Ronald Richards</p>
            <p className="text-sm text-gray-500">Co, Founder</p>

            </div>
            
        </div>
        
            

            {/* Student Images */}
            

            {/* Pagination */}
            <div className="mt-4 text-end text-gray-600">
              <span>1 / 3</span>
            </div>
          </div>
      </div>
      <div>
      <div className="bg-white p-6 rounded-lg  mt-4">
            <div className="flex items-center mb-2">
              {/* Star rating */}
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐☆</span>
            </div>
            <p className="text-gray-600 mb-4">
              Nullam dignissim ante scelerisque the is euismod fermentum odio sem
              semper the is erat a feugiat leo urna eget eros. Duis Aenean a
              imperdiet risus. Aliquam pellentesque.
            </p>
            <p className="font-bold text-lg">Ronald Richards</p>
            <p className="text-sm text-gray-500">Co, Founder</p>

            {/* Student Images */}
            

            {/* Pagination */}
            <div className="mt-4 text-end text-gray-600">
              <span>2 / 3</span>
            </div>
          </div>
      </div>
      <div>
      <div className="bg-white p-6 rounded-lg  mt-4">
            <div className="flex items-center mb-2">
              {/* Star rating */}
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐☆</span>
            </div>
            <p className="text-gray-600 mb-4">
              Nullam dignissim ante scelerisque the is euismod fermentum odio sem
              semper the is erat a feugiat leo urna eget eros. Duis Aenean a
              imperdiet risus. Aliquam pellentesque.
            </p>
            <p className="font-bold text-lg">Ronald Richards</p>
            <p className="text-sm text-gray-500">Co, Founder</p>

            {/* Student Images */}
            

            {/* Pagination */}
            <div className="mt-4 text-end text-gray-600">
              <span>3 / 3</span>
            </div>
          </div>
      </div>
      
      
    </Slider>
    <div className="flex items-center justify-center flex-col gap-7">
              <img
                className="w-20 h-20 rounded-full"
                src={blog1_1}
                alt="student"
              />
              <img
                className="w-20 h-20  rounded-full translate-x-7 "
                src={blog1_2}
                alt="student"
              />
              <img
                className="w-20 h-20 rounded-full"
                src={blog1_3}
                alt="student"
              />
            </div>

    </div>

        </div>
    </div>
    
    
    
    </>
  );
}