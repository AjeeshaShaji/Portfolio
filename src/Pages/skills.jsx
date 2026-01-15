import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "Semantic, accessible markup for modern web apps",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    desc: "Responsive layouts with modern styling techniques",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    desc: "ES6+, async logic, DOM manipulation",
  },
  {
    icon: <FaReact />,
    title: "React",
    desc: "Component-based UI, hooks, routing",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    desc: "Server-side logic & API development",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    desc: "RESTful APIs & middleware architecture",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    desc: "NoSQL database & schema design",
  },
  {
    icon: <FaGitAlt />,
    title: "Git & GitHub",
    desc: "Version control & collaboration",
  },
];

function Skills() {
  return (
    <section className="min-h-screen bg-[#2b2b2b] px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16"
        >
          Skills
        </motion.h1>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-600 p-6 text-center hover:border-white transition"
            >
              <div className="text-4xl text-white mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
