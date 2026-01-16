import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#3a3a3a] px-6 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16"
        >
          Education & Experience
        </motion.h1>

        <div className="space-y-12">

          {/* MERN Internship */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-600 p-8 bg-[#2b2b2b] hover:border-white transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              MERN Stack Development Intern
            </h2>

            <p className="text-sm text-gray-400 mb-4">
              Synnefo Solutions 
            </p>

            <p className="text-sm text-gray-400 mb-4">
              Apr 2025 - Present 
            </p>

            <p className="text-sm text-gray-400 mb-4">
               Ernakulam, Kerala, India
            </p>

          </motion.div>

          {/* BCA Degree */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-gray-600 p-8 bg-[#2b2b2b] hover:border-white transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Bachelor of Computer Applications (BCA)
            </h2>

            <p className="text-sm text-gray-400 mb-2">
              University of Kerala 
            </p>

            <p className="text-sm text-gray-400 mb-2">
              Oct 2022 - Apr 2025
            </p>

            <p className="text-sm text-gray-400 mb-4">
              College of Applied Science, Adoor, Kerala, India
            </p>

            <p>
              
            </p>
        
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;
