import { Star } from "lucide-react"

const ReviewCard = (props) => {
  return (
    <>
     <div className="w-[90%] grid grid-cols-1 py-6 px-3 border bg-[#F8F8FE] mx-auto rounded-lg">
        <div className="flex flex-col gap-5">
            <div className="flex gap-1">
                <Star color="#014BAE" fill="#014BAE" size={16}></Star>
                <Star color="#014BAE" fill="#014BAE" size={16}></Star>
                <Star color="#014BAE" fill="#014BAE" size={16}></Star>
                <Star color="#014BAE" fill="#014BAE" size={16}></Star>
                <Star color="#014BAE" fill="#014BAE" size={16}></Star>
            </div>
            <div>
                <p className="text-[14px] font-[Poppins] text-[#110c2d] ">{props.content}</p>
            </div>
            <div className="flex gap-5">
                <div >
                    <img src={props.imgurl} alt="" className="w-[50px] h-[50px] rounded-full"/>
                </div>
                <div>
                    <div>
                        <p className="text-[18px] text-[#110c2d] font-bold font-[Poppins]">{props.name}</p>
                    </div>
                    <div>
                        <p className="text-[16px] font-[Poppins]">{props.desig}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default ReviewCard
