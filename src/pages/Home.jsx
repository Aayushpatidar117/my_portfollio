import { Box, Container } from "@mui/material";
import React from "react";
import NavBar from "../components/navBar/NavBar";
import Hero from "../components/heroSection/Hero";
import Projects from "../components/projects/Projects";
import AboutMe from "../components/aboutSection/AboutMe";
import ContactMe from "../components/contactme/ContactMe";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <Container
      sx={{ width: "100%", height: "100%" }}
      className="overflow-hidden"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <NavBar />
      <Box
        sx={{
          marginTop: "20px",

          width: "100%",
          height: "100%",
        }}
      >
        <Hero />
      </Box>
      <Box>
        <p
          className="text-[#E7E7E7] text-[35px] bgcli md:text-[110px] font-medium mb-[-9px]
          select-none"
        >
          Aayush Patidar
        </p>
        <Projects />
      </Box>

      <Box className="pt-[190px] pb-[50px]">
        <AboutMe />
      </Box>

      <Box>
        <p
          className="text-[#E7E7E7] text-[50px] bg-clip-border md:text-[130px] font-medium
          select-none text-end mb-[-15px] md:mb-[-43px]"
        >
          Skills
        </p>
        <ContactMe />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default Home;
