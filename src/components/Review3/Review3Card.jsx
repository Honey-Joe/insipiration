import React from "react";
import { review3 } from "../../assets/image";
import { Star } from "lucide-react";

const Review3card = () => {
  return (
    <>
      <div className="max-w-[100%] mx-auto border py-10 px-5">
        <div className="w-[90%] mx-auto grid grid-cols-3">
          <div className="col-span-1">
            <img src={review3} alt="" className=" object-fill rounded-lg"/>
          </div>
          <div className="flex flex-col gap-5 col-span-2">
            <div>
              <p className="font-[Poppins] leading-10 text-[20px]">
                {" "}
                Flexible Classes refers to the process of acquiring knowledge or
                skills through the use of digital technologies and the internet.
                Flexible Classes refers to the process flexible Classes refers
                to the process Flexible Classes refers to the process of
                acquiring knowledge or skills
              </p>
            </div>
            <div>
              <p>Average Rating 4.7</p>
            </div>
            <div className="flex gap-5 ">
              <div className="border p-3 rounded-lg">
                <Star fill="#F57104" stroke="#F57104"></Star>
              </div>
              <div className="border p-3 rounded-lg">
                <Star fill="#F57104" stroke="#F57104"></Star>
              </div>
              <div className="border p-3 rounded-lg">
                <Star fill="#F57104" stroke="#F57104"></Star>
              </div>
              <div className="border p-3 rounded-lg">
                <Star fill="#F57104" stroke="#F57104"></Star>
              </div>
              <div className="border p-3 rounded-lg">
                <Star fill="#F57104" stroke="#F57104"></Star>
              </div>
            </div>
            <div>
                <p className="text-gray-900 font-bold text-xl">Christine Eve</p>
                <p className="text-gray-500 text-[12px]">WEB DEVELOPER</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Review3card;
