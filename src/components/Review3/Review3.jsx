import Slider from "react-slick";
import { Review1CardApi } from "../../assets/Review1CardApi";
import Review3card from "./Review3card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SamplePrevArrow from "./SamplePrevArrow/SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow/SampleNextArrow";

const Review3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-[100%] mx-auto my-10">
        <div className=" w-[90%] mx-auto">
          <div className=" p-8 flex flex-col gap-5">
            <div>
              <div className="flex gap-5">
                <div className="">
                  <h5 class="flex gap-3">
                    <p className="font-[Poppins] text-[18px]  md:text-[22px] lg:text-[24px] font-semibold text-[#4f5de4] ">
                      Testimonial
                    </p>
                    <svg
                      class="arrow-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 55 13"
                      className="w-[60px] fill-[#F57104]"
                    >
                      <g clip-path="url(#clip0_324_36194)">
                        <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                        <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                        <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                        <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                      </g>
                    </svg>
                  </h5>
                </div>
              </div>
              <div className="flex ">
                <p className="font-[Poppins] text-[22px]  md:text-[32px] lg:text-[40px] text-[#2a254d] font-semibold">
                  What Our Student Feedback
                </p>
              </div>
            </div>

            <div className="w-full relative">
              <Slider {...settings}>
                {Review1CardApi.map((student, index) => (
                  <Review3card key={index} {...student} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review3;
