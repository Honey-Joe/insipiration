import { ArrowRight, ChevronRight, Plus } from "lucide-react";

const Blog2card = (props) => {
  return (
    <>
    <div>
    <div className="overflow-hidden group relative  ">
        <img src={props.imgurl} alt="blog image" className="w-[100%] h-[500px]  object-cover z-20 rounded-t-xl" />
        <div className="absolute top-0 w-full h-full flex justify-center items-center -translate-y-[100%] group-hover:-translate-y-[1%] transition  bg-slate-300 opacity-55 rounded-xl">
            <Plus className=""></Plus>
        </div>
      </div>
    <div className="rounded-xl flex flex-col shadow-lg  transition w-[90%] mx-auto -translate-y-[150px] bg-white">
      
      <div className="flex flex-col p-5 gap-5">
        <div className="flex justify-between">
          <div>
            <button className="px-3 text-[14px] rounded-md py-0.5 bg-[#4E5DE5] font-[Poppins] text-white hover:bg-[#F57104] ">{props.tag}</button>
          </div>
          <div>
            <p className="font-[Poppins] text-[16px] font-medium text-[#f57005] ">{props.date}</p>
          </div>
        </div>
        <div>
          <p className="font-[Poppins] text-[16px] md:text-[18px] lg:text-[24px] text-[#2a254d] hover:text-[#4f5de4] font-medium">{props.blogtitle}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div>
              <img src={props.authorimg} alt="" />
            </div>
            <div>
              <div>
                <p className="font-[Poppins] text-[16px] font-medium text-[#2a254d] hover:text-[#4f5de4]">{props.authorname}</p>
                <p className="font-[Poppins] text-[12px] font-medium text-[#2a254d]">{props.designation}</p>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-5 py-5 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#F57104] rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#F57104] group-hover:translate-x-0 ease">
                <ArrowRight></ArrowRight>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
              <ArrowRight></ArrowRight>
              </span>
              
            </a>
          </div>
        </div>
      </div>
    </div>


    </div>
    
    
    </>
  );
};

export default Blog2card;
