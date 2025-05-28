import { Box } from "@mui/material";
import React from "react";

const NavPopup = () => {
  return (
    <Box
      className="w-[130px] h-[120px] bg-[#E7E7E7] p-[10px] flex
      flex-col gap-[5px] shadow-md rounded-md"
    >
      <p
        className="bg-[white] p-[3px] rounded-md font-medium 
        pl-[10px] cursor-pointer hover:text-[#e84949] transition-colors
        duration-600 text-black"
      >
        Skills
      </p>
      <p
        className="bg-[white] p-[3px] rounded-md text-black font-medium 
        pl-[10px] cursor-pointer hover:text-[#e84949] transition-colors
        duration-600 "
      >
        Contact Me
      </p>
      <p
        className="bg-[white] p-[3px] rounded-md text-black font-medium 
        pl-[10px] cursor-pointer hover:text-[#e84949] transition-colors
        duration-600 "
      >
        Projects
      </p>
    </Box>
  );
};

export default NavPopup;
