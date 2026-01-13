import React from "react";
import Skills from "../Pages/skills";

function PersonalDetails() {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-3 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-50 h-50 rounded-full object-cover border-4 border-gray-200 shadow-md"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ajeesha Shaji
          </h1>
          <h3 className="text-lg md:text-xl text-indigo-600 font-semibold mt-1">
            MERN Stack Developer
          </h3>

          {/* About Box */}
          <div className="mt-6 bg-gray-100 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              About
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Motivated MERN Stack Development Intern with practical experience building full-stack web
              applications using MongoDB, Express.js, React, and Node.js. I have a solid understanding of REST
              APIs, authentication, MVC patterns, and Git version control. I am passionate about writing clean,
              efficient code and thrive in collaborative environments. I am looking for opportunities to apply my
              technical skills while contributing to impactful products and expanding my industry knowledge. I am
              eager to learn from real-world development environments and contribute to meaningful projects
              while growing as a full-stack developer.
            </p>
          </div>
        </div>

      </div>
    </section>
    <Skills/>
  </>
  )
}

export default PersonalDetails;
