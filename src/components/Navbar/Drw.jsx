import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Menu } from "lucide-react";
import { logo } from "../../assets/image";
 
export function DrawerDefault() {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <Button onClick={openDrawer} className="text-black"><Menu></Menu></Button>
      <Drawer open={open} onClose={closeDrawer} className="p-6 w-[50%] z-10 top-0 left-0 absolute bg-white">
        <div className="mb-6 flex items-center justify-between">
          <div >
            <img src={logo} alt="" className="w-[90%]"/>
          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
            <ul className="flex flex-col gap-5">
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
        
      </Drawer>
    </React.Fragment>
  );
}