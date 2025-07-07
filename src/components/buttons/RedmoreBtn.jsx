import React from "react";

const RedmoreBtn = ({ gitHubLink }) => {
  return (
    <div className="">
      <a href={gitHubLink} target="_blank">
        <button
          className="relative group  bg-[#e84949] text-white font-medium border-2 border-[#e84949]
                         overflow-hidden text-sm md:text-lg p-[2px] md:p-[10px] "
        >
          {/* Animated background on hover */}
          <span
            className="absolute inset-0 bg-black z-0 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden="true"
          ></span>

          {/* Button text with color change on hover */}
          <span className="relative z-10 flex justify-center items-center group-hover:text-[#e84949]">
            <p>{`Read more`}</p>
          </span>
        </button>
      </a>
    </div>
  );
};

export default RedmoreBtn;
