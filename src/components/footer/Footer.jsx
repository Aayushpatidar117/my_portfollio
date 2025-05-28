import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative mt-[-1px] py-20 bg-[#343d68]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center px-5 gap-4">
          {/* Faded Text */}
          <div className="absolute bottom-1 right-[30px] text-[5rem] text-[#535c87] select-none font-bold">
            Aayush Patidar
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 z-10 ml-[20px]">
            <div className="flex justify-start items-center gap-[20px]">
              <a
                href="#project"
                className="text-white hover:text-[#e84949] transition-all duration-500 hover:scale-110
                font-medium"
              >
                Project
              </a>
              <a
                href="#skills"
                className="text-white hover:text-[#e84949] transition-all duration-300 hover:scale-110
                font-medium"
              >
                Skill
              </a>
              <a
                href="#contactme"
                className="text-white hover:text-[#e84949] transition-all duration-300 hover:scale-110
                font-medium"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-[15px]">
              <a
                href="https://www.linkedin.com/in/aayushpatidar117/"
                target="_blank"
                className="flex justify-center items-center gap-[10px]"
              >
                <FaLinkedin
                  className="text-3xl text-white cursor-pointer hover:text-[#e84949] 
                transition-all duration-300 "
                />
              </a>
              <a
                href="https://github.com/Aayushpatidar117"
                target="_blank"
                className="flex justify-center items-center gap-[10px] "
              >
                <FaGithub
                  className="text-3xl text-white cursor-pointer hover:text-[#e84949] 
                transition-all duration-300"
                />
              </a>
              <p className="text-2xl text-white hover:text-[#e84949] cursor-pointer transition-all duration-500">
                aayushpatidar@gmail.com
              </p>
            </div>
            {/* <div className="flex justify-center items-center gap-[7px]">
              <HiOutlineMail className="text-3xl text-white" />
            </div> */}
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-6 text-white z-10">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a href="mailto:someone@example.com">
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
