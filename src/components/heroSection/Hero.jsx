import { Box, Container } from "@mui/material";
import { useMediaQuery } from "@uidotdev/usehooks";
import heroImg from "../../assets/Images/userAsset/password_photo.jpg";
// import { TypeAnimation } from "react-type-animation";
import { MdOutlineFileDownload } from "react-icons/md";
import "../heroSection/hero.css";
import { useEffect, useState } from "react";
import circle from "../../assets/Images/userAsset/circle.png";
import dots from "../../assets/Images/userAsset/dots.png";
import plus from "../../assets/Images/userAsset/plus.png";
import cube from "../../assets/Images/userAsset/cube.png";
import zigzags from "../../assets/Images/userAsset/zigzags.png";

const Hero = () => {
  const phone = useMediaQuery("(max-width:769px)");
  console.log("value of phone", phone);

  const skills = [
    "Coder",
    "Full Stack Developer",
    "Web Developer",
    "Backend Developer",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];

    if (charIndex < currentSkill.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentSkill[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setTypedText("");
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      }, 1000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, currentSkillIndex, skills]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/aayush_patidar_resume-0.5.pdf";
    link.download = "Aayush_Patidar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container
      className={`flex p-[30px] w-[100%] justify-center item-center aspect-auto ${
        phone ? "flex-col gap-[30px] w-auto" : "flex-row gap-[30px]"
      }`}
    >
      {/* Left Side Section */}
      <Box
        className={` flex flex-col ${
          phone
            ? "items-center justify-center w-[100%]"
            : "items-start justify-center overflow-hidden w-[50%]"
        }`}
      >
        <p
          className={`${
            phone ? "text-2xl text-center" : "text-4xl"
          }  font-medium text-[#3a3d40] `}
        >
          Hi! Aayush Patidar
        </p>

        <h1
          className="md:text-[35px] text-[20px] text-slate-700 flex justify-center md:justify-start items-center gap-3
          w-[25em]  md:w-[35rem]"
        >
          {/* <p className={`font-medium ${phone ? "text-3xl" : "text-4xl"}`}> */}
          I am a{/* </p> */}
          <span
            className="bg-gradient-to-br from-blue-600 to-purple-900  text-[20px] w-[200px] md:w-[390px]
              md:text-[40px] md:text-wrap font-medium text-transparent bg-clip-text flex justify-start items-center "
          >
            {typedText}
            <div className="w-[3px] h-[40px] md:h-[60px] bg-black ml-1 animate-blink-custom text-start"></div>
          </span>
        </h1>

        <p className="text-sm font-medium">
          I'm a software developer and here is my portfolio website. Here you'll
          learn about my journy as a software developer.
        </p>

        <button
          className="bg-[#e84949] p-[10px] w-[190px] md:p-[15px] md:w-[200px]  text-white font-medium
          transition-transform relative border-2 border-[#e84949] mt-4 z-[0] btn-pink"
          onClick={handleDownload}
        >
          <span className="bg-black z-10 bgspan"></span>
          <span className="flex justify-between items-center  ">
            <p>Download resume</p>
            <MdOutlineFileDownload className="text-[20px]" />
          </span>
        </button>
      </Box>

      {/* Right Side Section  */}
      <Box
        className={`image-container aspect-square ${
          phone
            ? "w-[100%] "
            : "w-[50%] h-[25em] flex justify-center items-center"
        }  p-[30px] `}
      >
        <Box
          className={`image-frame relative ${
            phone
              ? "w-[100%] mx-auto p-[17px] md:p-[30px]"
              : "w-[22.5em] h-[23.6em] flex justify-center items-center p-[1.87em]"
          }`}
        >
          <img src={heroImg} className="aspect-auto z-0" />
          <img
            src={circle}
            className="w-[15px] md:w-[20px] circle-img left-[10px] bottom-[10px] absolute z-10 "
          />
          <img
            src={dots}
            className="w-[60px] md:w-[100px] dots-img right-[15px] bottom-[20px] absolute z-10"
          />
          <img
            src={zigzags}
            className="w-[20px] md:w-[40px]  zigzags-img left-[10px] top-[10px] absolute z-10"
          />
          <img
            src={plus}
            className="w-[25px] md:w-[30px] plus-img top-[10px] right-[50%] left-[50%] absolute z-10"
          />
          <img
            src={cube}
            className="w-[30px] md:w-[40px] cube-img right-[10px] top-[20px] absolute z-10"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
