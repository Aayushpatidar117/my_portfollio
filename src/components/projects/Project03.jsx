import React from "react";
import "./project03.css";
import cssImg from "../../assets/Images/stack/CSS.png";
import HTMLImg from "../../assets/Images/stack/HTML.png";
import TailwindImg from "../../assets/Images/stack/Tailwind.png";
import JavaScriptImg from "../../assets/Images/stack/Javascript.svg";
import gitImg from "../../assets/Images/stack/Git.svg";
import gitHubImg from "../../assets/Images/stack/Github.svg";
import { FaGithub, FaLink } from "react-icons/fa";

const Project03 = () => {
  return (
    <div
      id="project03"
      className="relative w-[94%]  bg-cover bg-center shadow-[12px_12px_30px_#747272] group overflow-hidden
      aspect-[19/9] "
    >
      {/* <!-- Overlay (after) --> */}
      <div className="absolute inset-0 bg-[#1f1f1f9a] z-0"></div>
      {/* <!-- Hover Gradient Overlay (before) --> */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#343d68] via-[#343d68be] to-[#343d687c] scale-x-0 origin-left 
            transition-transform duration-400 z-1 group-hover:scale-x-100"
      ></div>
      {/* <!-- Big Project Number (left side) --> */}
      <div
        className="absolute right-[2%] top-[-5%] md:top-[-7%] md:text-[8rem] text-white text-[3rem] font-semibold 
          opacity-0 z-10 group-hover:opacity-100"
      >
        03
      </div>
      {/* <!-- Project Content (right side) --> */}
      <div
        className="absolute h-[100%] w-[100%] text-white flex flex-col justify-center
        pl-[8%] z-10 transition-all duration-1000 hover:scale-110 "
      >
        <div className="flex flex-wrap md:gap-2 gap-[10px] w-[60%]">
          <img src={HTMLImg} className="md:w-10 md:h-10 w-[20px] h-[20px]" />
          <img src={cssImg} className="md:w-10 md:h-10 w-[20px] h-[20px]" />
          <img
            src={TailwindImg}
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={JavaScriptImg}
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img src={gitImg} className="md:w-10 md:h-10 w-[20px] h-[20px]" />
          <img src={gitHubImg} className="md:w-10 md:h-10 w-[20px] h-[20px]" />
        </div>

        {/* <!-- Heading --> */}
        <h2 className="md:text-[3rem] text-[1rem] font-bold">
          Admin Dashboard
        </h2>

        <p className="w-[90%] md:text-[1rem] text-[0.6rem] italic">
          An interactive Admin Dashboard that provides real-time insights,
          user...
          {/* management, and data analytics in a centralized interface. */}
        </p>

        {/* <!-- Button Group --> */}
        <div className="flex justify-start items-center gap-4 w-[100%] h-[20%]">
          <button
            className="relative group w-[5rem] md:w-[7rem] bg-[#e84949] text-white font-medium border-2 border-[#e84949] 
                     overflow-hidden text-sm md:text-lg flex justify-center items-center p-[2px] md:p-[10px] "
          >
            {/* Animated background on hover */}
            <span
              className="absolute inset-0 bg-black z-0 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              aria-hidden="true"
            ></span>

            {/* Button text with color change on hover */}
            <span className="relative z-10 flex justify-between items-center group-hover:text-[#e84949]">
              <p>Read more</p>
            </span>
          </button>

          <div className="flex justify-center gap-[0.6rem] items-center">
            <a
              href="https://github.com/Aayushpatidar117/Dashboards"
              target="_blank"
            >
              <FaGithub className="text-[20px] md:text-[30px] hover:text-[#e84949]" />
            </a>
            <a href="https://dashboards-rho-five.vercel.app/" target="_blank">
              <FaLink className="text-[20px] md:text-[30px] hover:text-[#e84949]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project03;
