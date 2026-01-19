import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#3a3a3a] px-6 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto cursor-pointer">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16"
        >
          Contact Me
        </motion.h1>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-gray-600 bg-[#2b2b2b] p-10 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Get in Touch
          </h2>

          <ul className="space-y-6 text-gray-400">

            {/* Email */}
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-white" />
              <a
                href="mailto:ajeeshashaji2357@gmail.com"
                className="hover:text-white transition break-all"
              >
                ajeeshashaji2357@gmail.com
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-white" />
              <a
                href=""
                className="hover:text-white transition"
              >
                +91 80780 05929
              </a>
            </li>

            {/* LinkedIn */}
            <li className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-white" />
              <a
                href="https://www.linkedin.com/in/ajeesha-shaji-191b98311"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition break-all"
              >
                linkedin.com/in/ajeesha-shaji
              </a>
            </li>

            {/* GitHub */}
            <li className="flex items-center gap-4">
              <Github className="w-6 h-6 text-white" />
              <a
                href="https://github.com/AjeeshaShaji"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition break-all"
              >
                github.com/AjeeshaShaji
              </a>
            </li>

          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
