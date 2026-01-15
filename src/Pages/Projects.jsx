import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#2b2b2b] px-6 md:px-16 py-20"
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
          Projects
        </motion.h1>

        <div className="space-y-12">

          {/* Project Card */}
          {[
            {
              title: "Student Management System",
              tools: "HTML, CSS, JavaScript, Node.js, MongoDB",
              points: [
                "Developed a system to manage student-related book records.",
                "Implemented CRUD operations for adding, editing, deleting, and viewing book details.",
                "Integrated search and filter functionality for efficient data retrieval.",
                "Designed a clean, user-friendly interface to improve data organization.",
              ],
              link: "https://github.com/AjeeshaShaji/mvcbook.git",
            },
            {
              title: "Expense Tracker",
              tools: "HTML, CSS, JavaScript, React, Express, MongoDB",
              points: [
                "Developed a mini expense management application using React.",
                "Implemented features to add, view, and delete expenses.",
                "Displayed real-time total expense calculation with automatic updates.",
                "Used localStorage to persist data across browser refreshes.",
                "Demonstrated strong understanding of React hooks and state management.",
              ],
              link: "https://github.com/AjeeshaShaji/Expense.git",
            },
            {
              title: "E-Commerce Website",
              tools:
                "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB",
              points: [
                "Developed a role-based e-commerce platform for sellers and buyers.",
                "Implemented secure authentication, REST APIs, and MongoDB schemas.",
                "Enabled sellers to add, edit, and delete products.",
                "Allowed buyers to search and browse products.",
                "Built a responsive React frontend with an MVC-based backend.",
              ],
              link: "https://github.com/AjeeshaShaji/ecommers.git",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border border-gray-600 p-8 hover:border-white transition"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h2>

              <p className="text-sm text-gray-400 mb-4">
                Tools Used: {project.tools}
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-white font-medium hover:underline"
              >
                View GitHub Repository →
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
