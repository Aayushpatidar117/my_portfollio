import { Box } from "@mui/material";
import React from "react";
import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";
import Project05 from "./Project05";

const Projects = () => {
  return (
    <Box
      sx={{ backgroundColor: "#E7E7E7", paddingBottom: "50px" }}
      className="flex flex-col gap-[110px] "
    >
      <h1
        className="text-[30px] md:text-[100px] font-medium
        text-[#e84949] text-center p-[10px] mb-[-80px] "
      >
        Projects
      </h1>
      <Box className="mt-[20px] w-full cursor-pointer ">
        <Project01 />
      </Box>

      <Box className="mt-[20px] w-full cursor-pointer">
        <Project02 />
      </Box>

      <Box className="mt-[20px] w-full cursor-pointer">
        <Project03 />
      </Box>

      <Box className="mt-[20px] w-full cursor-pointer">
        <Project04 />
      </Box>

      <Box className="mt-[20px] w-full cursor-pointer">
        <Project05 />
      </Box>
    </Box>
  );
};

export default Projects;
