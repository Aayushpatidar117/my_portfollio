import React from "react";
import "./project04.css";
import cssImg from "../../assets/Images/stack/CSS.png";
import HTMLImg from "../../assets/Images/stack/HTML.png";
import ReactImg from "../../assets/Images/stack/React.png";
import ReduxImg from "../../assets/Images/stack/Redux.svg";
import TailwindImg from "../../assets/Images/stack/Tailwind.png";
import JavaScriptImg from "../../assets/Images/stack/Javascript.svg";
import gitImg from "../../assets/Images/stack/Git.svg";
import gitHubImg from "../../assets/Images/stack/Github.svg";
import { FaGithub, FaLink } from "react-icons/fa";

const Project04 = () => {
  return (
    <div
      id="project04"
      className="relative w-[94%] bg-cover bg-center shadow-[-12px_12px_30px_#747272] group overflow-hidden
              aspect-[19/9] ml-[6%]"
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
        className="absolute left-[2%] top-[-7%] md:text-[8rem] text-white text-[3rem] font-semibold 
            opacity-0 z-10 group-hover:opacity-100"
      >
        04
      </div>

      {/* <!-- Project Content (right side) --> */}
      <div
        className="absolute h-[100%] w-[100%] text-white flex flex-col justify-center 
        md:gap-[10px] pl-[25%] md:pl-[50%] z-10 transition-all duration-1000 hover:scale-110 "
      >
        <div className="flex flex-wrap gap-[0.6rem] w-[100%]">
          <img
            src={HTMLImg}
            alt=""
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={cssImg}
            alt=""
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={ReduxImg}
            alt=""
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={ReactImg}
            alt=""
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={TailwindImg}
            alt=""
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={JavaScriptImg}
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={gitImg}
            alt=""
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
          <img
            src={gitHubImg}
            alt=""
            className="md:w-10 md:h-10 w-[20px] h-[20px]"
          />
        </div>

        {/* <!-- Heading --> */}
        <h2 className="md:text-[3rem] text-[1rem] font-bold">Otter.ai UI</h2>

        <p className="w-[90%] text-[0.6rem] md:text-[1rem] italic">
          A powerful Otter.ai UI clone that transcribes speech...
          {/*  to text in real-time using advanced voice recognition. */}
        </p>

        {/* <!-- Button Group --> */}
        <div className="flex justify-start items-center gap-4 w-[100%] h-[25%] ">
          <button
            className="relative group bg-[#e84949] text-white font-medium border-2 border-[#e84949] 
                       p-[2px] md:p-[10px]  overflow-hidden text-sm md:text-lg "
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

          <div className="flex justify-center gap-[0.7rem] items-center">
            <a
              href="https://github.com/Aayushpatidar117/Otter.ai_UI_Clone"
              target="_blank"
            >
              <FaGithub className="text-[20px] md:text-[30px] hover:text-[#e84949]" />
            </a>
            <a href="https://otter-ai-ui-clone.vercel.app/" target="_blank">
              <FaLink className="text-[20px] md:text-[30px] hover:text-[#e84949]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project04;
