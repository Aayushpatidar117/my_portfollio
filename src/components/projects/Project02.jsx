import React from "react";
import "./project02.css";
import cssImg from "../../assets/Images/stack/CSS.png";
import HTMLImg from "../../assets/Images/stack/HTML.png";
import ReactImg from "../../assets/Images/stack/React.png";
import ReduxImg from "../../assets/Images/stack/Redux.svg";
import TailwindImg from "../../assets/Images/stack/Tailwind.png";
import JavaScriptImg from "../../assets/Images/stack/Javascript.svg";
import gitImg from "../../assets/Images/stack/Git.svg";
import gitHubImg from "../../assets/Images/stack/Github.svg";
import { FaGithub, FaLink } from "react-icons/fa";

const Project02 = () => {
  return (
    <div
      id="project02"
      className="relative w-[94%] bg-cover bg-center shadow-[-12px_12px_30px_#747272] group overflow-hidden
           aspect-[19/9] ml-[37px] md:ml-[66px] "
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
        className="absolute left-[5px] top-[-30px] md:top-[-65px] md:text-[10rem] text-white text-[5rem] font-semibold 
         opacity-0 z-10 group-hover:opacity-100"
      >
        02
      </div>

      {/* <!-- Project Content (right side) --> */}
      <div
        className="absolute h-[30%] md:h-[45%] w-[80%] md:bottom-[25%] md:right-[-22%] bottom-[45%] right-[-17%] text-white flex flex-col 
        md:gap-[10px] z-10 transition-all duration-1000 hover:scale-110 "
      >
        <div className="flex flex-wrap md:gap-2 gap-[10px] w-[55%] md:w-[60%]">
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
        <h2 className="md:text-[50px] text-[20px] font-bold leading-[3rem]">
          Shoping Cart
        </h2>

        <p className="w-[70%] text-[10px] md:text-[16px] italic">
          A dynamic shopping cart web application that allows users to browse
          products, add items to the cart, update quantities, and manage orders
          seamlessly.
        </p>

        {/* <!-- Button Group --> */}
        <div className="flex justify-start items-center gap-4 ">
          <button
            className="relative group bg-[#e84949] text-white font-medium border-2 border-[#e84949] 
                        p-[5px] md:p-[15px] mt-4 overflow-hidden text-sm md:text-lg "
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

          <div className="flex justify-center mb-[-17px]  gap-[10px] items-center">
            <a
              href="https://github.com/Aayushpatidar117/Redux-Shoping_Cart"
              target="_blank"
            >
              <FaGithub className="text-[25px] md:text-[30px] hover:text-[#e84949]" />
            </a>
            <a
              href="https://redux-shoping-cart-chi.vercel.app/"
              target="_blank"
            >
              <FaLink className="text-[25px] md:text-[30px] hover:text-[#e84949]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project02;
