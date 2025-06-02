import { AppBar, Box } from "@mui/material";
import { IoReorderThree } from "react-icons/io5";
import { useMediaQuery } from "@mui/material";
import logoImg from "../../assets/Images/userAsset/nav_log.jpg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../redux/slice/navBarSlice";
import NavPopup from "./NavPopup";

const NavBar = () => {
  const dispatch = useDispatch();
  const isPopupOpen = useSelector((state) => state.popupNav.isPopupOpen);
  const phone = useMediaQuery("(max-width:769px)");
  return (
    <Box className="">
      {phone ? (
        <Box className="flex justify-between items-center relative">
          <Box className="flex justify-center items-center cursor-pointer">
            <img src={logoImg} className="w-[70px]" />
            <p className="ml-[-13px] text-2xl">ayush Patidar</p>
          </Box>
          <IoReorderThree
            className="text-2xl cursor-pointer"
            onClick={() => {
              dispatch(togglePopup());
              console.log(isPopupOpen);
            }}
          />
          {isPopupOpen && (
            <Box className="absolute right-[-1px] top-[45px]">
              <NavPopup />
            </Box>
          )}
        </Box>
      ) : (
        <Box className="flex justify-between items-center cursor-pointer">
          <Box className="flex justify-center items-center cursor-pointer">
            <img src={logoImg} className="w-[100px]" />
            <p className="ml-[-18px] text-3xl">ayush Patidar</p>
          </Box>
          <Box className="flex justify-evenly items-center w-[40%]">
            <a
              className="cursor-pointer hover:scale-110 font-medium transition-transform
              duration-500 text-lg hover:text-[#e84949]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="cursor-pointer hover:scale-110 font-medium transition-transform
              duration-500 text-lg hover:text-[#e84949]"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="cursor-pointer hover:scale-110 font-medium transition-transform
              duration-500 text-lg hover:text-[#e84949]"
              href="#contact_me"
            >
              Contact Me
            </a>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
