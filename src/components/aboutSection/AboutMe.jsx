import { Box } from "@mui/material";
import React from "react";
import "./aboutme.css";
import blobImg from "../../assets/Images/userAsset/blob_vector.png";
import htmlImg from "../../assets/Images/stack/HTML.png";
import cssImg from "../../assets/Images/stack/CSS.png";
import javascriptImg from "../../assets/Images/stack/javascript.svg";
import cImg from "../../assets/Images/stack/c.png";
import cppImg from "../../assets/Images/stack/c++.png";
import javaImg from "../../assets/Images/stack/java.png";
import golangImg from "../../assets/Images/stack/golang.png";
import phpImg from "../../assets/Images/stack/php.png";
import muiImg from "../../assets/Images/stack/MaterialUI.svg";
import ReactImg from "../../assets/Images/stack/React.png";
import ReduxImg from "../../assets/Images/stack/Redux.svg";
import TailwindImg from "../../assets/Images/stack/Tailwind.png";
import bootstrapImg from "../../assets/Images/stack/Bootstrap.svg";
import mongoImg from "../../assets/Images/stack/MongoDB.svg";
import chartjsImg from "../../assets/Images/stack/ChartJs.svg";
import gitImg from "../../assets/Images/stack/Git.svg";
import githubImg from "../../assets/Images/stack/Github.svg";
import ExpressImg from "../../assets/Images/stack/Express.png";

const AboutMe = () => {
  return (
    <Box className="flex justify-center items-center flex-col md:flex-row md:gap-[20px] gap-[380px] mb-[100px] ">
      <Box className="w-[100%] md:w-[50%] text-start text-wrap">
        <div>
          <h1 className="text-[60px] font-medium text-[#e84949]">
            <span className="text-[130px] font-medium text-[#e84949] mr-[-4px]">
              M
            </span>
            e and
          </h1>
          <h1 className="text-[60px] font-medium text-[#e84949] mt-[-15px]">
            {" "}
            My Tech Stack
          </h1>
          <span className="text-md italic pb-[30px] mt-[20px] leading-6">
            <p>
              Hello! I'm Aayush Patidar, a passionate and curious developer from
              Nisarpur, Madhya Pradesh, currently pursuing my postgraduate
              degree in Computer Applications from Shree Vaishnav Institute of
              Computer Applications, Indore.
            </p>
            <p>
              From the very beginning of my academic journey, I’ve always been
              fascinated by how technology can solve real-world problems. Over
              time, that curiosity turned into a passion for web development,
              backend systems, and software design.
            </p>
            <br />
            <h2 className="text-[#e84949] font-medium text-3xl">What I Do</h2>
            <p>
              specialize in building responsive, user-friendly web applications.
              My core tech stack includes:
            </p>
            <li>Frontend: ReactJS, Redux Toolkit, Tailwind CSS, MUI</li>
            <li>Backend: PHP, Laravel, Firebase, Express JS</li>
            <li>Other Tools: Git, GitHub, EmailJS, Toastify, Form handling</li>
            <li>Database: MySQL, Mongo DB</li>
            <br />
            <h2 className="text-[#e84949] font-medium text-3xl">What I Do</h2>
            <p>
              I believe in continuous learning and adaptability. Whether it's
              debugging a tricky component or learning a new framework, I
              approach challenges with a problem-solving mindset. I document my
              projects thoroughly, follow clean code practices, and ensure
              scalability in everything I build.
            </p>
          </span>
        </div>
      </Box>
      <Box className="w-[50%] mb-[180px] md:w-[50%] flex justify-center items-center relative">
        <img src={blobImg} className="absolute z-20 blobImg" />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
          className="z-30 absolute justify-center items-center gap-[20px] md:gap-[40px]"
        >
          <img
            src={cImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={cppImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={javascriptImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={javaImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={golangImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={phpImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={htmlImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={cssImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />

          <img
            src={muiImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={ReactImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={ExpressImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={ReduxImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={TailwindImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={bootstrapImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={mongoImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={chartjsImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={gitImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
          <img
            src={githubImg}
            className="w-[50px] md:w-[80px] cursor-pointer hover:scale-125 transition-all duration-700"
          />
        </div>
      </Box>
    </Box>
  );
};

export default AboutMe;
