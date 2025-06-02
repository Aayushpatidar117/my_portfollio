import React from "react";
import ContactForm from "./ContactForm";
import { Box } from "@mui/material";

const ContactMe = () => {
  return (
    <div className="contact_me w-[100%] bg-[#E7E7E7] mb-[50px]">
      <h1
        className="text-[30px] md:text-[90px] font-medium
        text-[#e84949] text-center p-[10px]"
      >
        Contact Me
      </h1>
      <p className="text-center text-3xl font-medium text-[#767474] p-[10px]">
        Question, thoughts, or just want to say hello?
      </p>
      <Box className=" flex justify-center items-center">
        <ContactForm />
      </Box>
    </div>
  );
};

export default ContactMe;
