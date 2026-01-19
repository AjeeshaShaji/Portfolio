import React from "react";
import { motion } from "framer-motion";
import Skills from "../Pages/skills";

function PersonalDetails() {
  return (
    <>
      <section className="min-h-screen bg-[#3a3a3a] flex items-center px-6 md:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-[460px] object-cover rounded-xl"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Ajeesha Shaji
            </h1>

            <h3 className="mt-4 text-xl text-gray-400 font-medium">
              MERN Stack Developer
            </h3>

            <div className="w-50 h-[2px] bg-gray-500 my-6"></div>

            <p className="text-gray-400 leading-relaxed max-w-lg text-sm md:text-base">
              Motivated MERN Stack Development Intern with practical experience
              building full-stack web applications using MongoDB, Express.js,
              React, and Node.js. Passionate about clean code, REST APIs, and
              scalable architecture.
            </p>

            <a href="/Ajeesha_Shaji_Resume.pdf" download><button className="mt-6 px-6 py-2 border border-gray-500 cursor-pointer rounded-xl text-white hover:bg-gray-700 transition">Download Resume</button></a>

          </motion.div>
        </div>
      </section>

    
    </>
  );
}

export default PersonalDetails;
