import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "Semantic and accessible web structure",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    desc: "Responsive layouts and modern UI styling",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    desc: "ES6+, async programming, DOM manipulation",
  },
  {
    icon: <FaReact />,
    title: "React.js",
    desc: "Component-based UI, hooks, routing",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    desc: "Backend logic and REST API development",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    desc: "Middleware architecture and RESTful APIs",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    desc: "NoSQL database and schema design",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    desc: "Relational database and SQL queries",
  },
  {
    icon: <FaJava />,
    title: "Java",
    desc: "Object-oriented programming concepts",
  },
  {
    icon: <FaPython />,
    title: "Python",
    desc: "Scripting and problem-solving skills",
  },
  {
    icon: <SiC />,
    title: "C",
    desc: "Programming fundamentals and logic building",
  },
  {
    icon: <SiCplusplus />,
    title: "C++",
    desc: "OOP concepts and data structures",
  },
  {
    icon: <FaGitAlt />,
    title: "Git & GitHub",
    desc: "Version control and team collaboration",
  },
  {
    icon: <FaLinux />,
    title: "Linux",
    desc: "Basic commands and development environment",
  },
];

function Skills() {
  return (
    <section className="min-h-screen bg-[#3a3a3a] px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto ">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16"
        >
          Skills
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#2b2b2b] border border-gray-600 p-6 text-center hover:border-white transition duration-300"
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
