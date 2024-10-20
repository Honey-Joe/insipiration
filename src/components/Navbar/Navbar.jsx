import { Menu, Search, ShoppingCart } from "lucide-react";
import { logo } from "../../assets/image";
import { DrawerDefault } from "./Drw";


const Navbar = () => {
  
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[95%] lg:w-[85%] px-3  mx-auto flex justify-between items-center py-7 shadow-lg border-2 rounded-b-lg">
          <div>
            <img src={logo} alt="brand logo" className="w-[50%] lg:w-[80%]" />
          </div>
          <div>
            <ul className=" gap-11 hidden xl:flex">
              <li className="font-[Poppins] text-[17px] hover:text-[#5b3aee] font-medium">
                <a href="#">Home</a>
              </li>
              <li className="font-[Poppins] text-[17px] hover:text-[#5b3aee] font-medium">
                <a href="#">About Us</a>
              </li>
              <li className="font-[Poppins] text-[17px] hover:text-[#5b3aee] font-medium">
                <a href="#">Courses</a>
              </li>
              <li className="font-[Poppins] text-[17px] hover:text-[#5b3aee] font-medium">
                <a href="#">Pages</a>
              </li>
              <li className="font-[Poppins] text-[17px] hover:text-[#5b3aee] font-medium">
                <a href="#">News</a>
              </li>
              <li className="font-[Poppins] text-[17px] hover:text-[#5b3aee] font-medium">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between gap-11 overflow-hidden">
            <ul className="flex justify-end items-center gap-3 lg:gap-10">
              <li>
                <Search size={20}></Search>
              </li>
              <li>
                <ShoppingCart size={20}></ShoppingCart>
              </li>
              <li className="hidden lg:block">
                <button className="px-5 py-3 bg-[#5b3aee] rounded-full font-[Poppins] text-white  font-medium">
                  Apply Now
                </button>
              </li>
            </ul>
            <div className="block lg:hidden overflow-hidden">
              <div className="">
                <DrawerDefault></DrawerDefault>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
