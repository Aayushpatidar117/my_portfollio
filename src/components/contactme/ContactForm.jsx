import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      form_name: formData.name,
      form_email: formData.email,
      form_subject: formData.subject,
      form_message: formData.message,
      time: new Date().toLocaleString(),
    };

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill out all fields!");
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Email sent successfully!");
        console.log("Email response:", response);

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
        toast.error("Something went wrong!");
      });
  };

  const customStyles = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#e84949",
      },
    },
    "& label.Mui-focused": {
      color: "#e84949",
    },
  };

  return (
    <Box className="flex w-[90%] mx-auto flex-col mt-[40px] gap-[40px] p-[20px] justify-center items-center">
      <TextField
        label="Enter your name"
        variant="outlined"
        className="w-[80%] shadow-lg shadow-[#4a4747]"
        sx={customStyles}
        value={formData.name}
        onChange={handleChange("name")}
      />
      <TextField
        label="Enter your email address"
        variant="outlined"
        className="w-[80%] shadow-lg shadow-[#4a4747]"
        sx={customStyles}
        value={formData.email}
        onChange={handleChange("email")}
      />
      <TextField
        label="Enter your subject"
        variant="outlined"
        className="w-[80%] shadow-lg shadow-[#4a4747]"
        sx={customStyles}
        value={formData.subject}
        onChange={handleChange("subject")}
      />
      <TextField
        label="Enter your message"
        variant="outlined"
        className="w-[80%] shadow-lg shadow-[#4a4747]"
        sx={customStyles}
        value={formData.message}
        onChange={handleChange("message")}
        multiline
        rows={4}
      />

      <Box>
        <button
          onClick={handleSubmit}
          className="bg-[#e84949] p-[10px] w-[190px] md:p-[15px] md:w-[200px] text-white font-medium
          transition-transform relative border-2 border-[#e84949] mt-4 z-[0] btn-pink"
        >
          <span className="bg-black z-10 bgspan"></span>
          <span className="relative z-10 flex justify-between items-center">
            <p>Send Message</p>
            <LuSend className="text-[20px]" />
          </span>
        </button>
      </Box>
    </Box>
  );
};

export default ContactForm;
