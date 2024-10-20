import { ChevronRight } from "lucide-react";
import { Blog1Data } from "../../API/Blog1data";
import Blog1card from "./Blog1card";

const Blog1 = () => {
  return (
    <>
      <div className="max-w-[100%] bg-[#F6F7F6]">
        <div className="w-[90%] mx-auto grid grid-cols-1 py-10 gap-3">
          <div className="flex justify-center">
            <div className="">
              <h5 class="flex  items-center justify-center gap-3">
                <p className="font-[Poppins] text-[18px]  md:text-[22px] lg:text-[24px] font-semibold text-[#4f5de4] ">
                  Latest Blog
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
          <div className="flex justify-center">
            <p className="font-[Poppins] text-[22px]  md:text-[32px] lg:text-[40px] text-[#2a254d] font-semibold">Latest Updates & Articles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                Blog1Data.map((e)=>{
                    return(
                        <Blog1card
                            imgurl = {e.imgurl}
                            tag = {e.tag}
                            designation = {e.designation}
                            date = {e.date}
                            authorimg = {e.authorimg}
                            blogtitle = {e.blogtitle}
                            authorname= {e.authorname}
                        >


                        </Blog1card>
                    )
                })
            }
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog1;
