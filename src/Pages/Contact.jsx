import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Me
        </h1>

        <div className="space-y-10">

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
              Get in Touch
            </h2>

            <ul className="space-y-4 text-gray-600">
              {/* Email */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-gray-800">Email:</span>
                <a
                  href="mailto:ajeeshashaji2357@gmail.com"
                  className="text-indigo-600 hover:underline break-all"
                >
                  ajeeshashaji2357@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-gray-800">Contact:</span>
                <a
                  href="tel:+918078005929"
                  className="text-indigo-600 hover:underline"
                >
                  +91 80780 05929
                </a>
              </li>

              {/* LinkedIn */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-gray-800">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/ajeesha-shaji-191b98311"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline break-all"
                >
                  linkedin.com/in/ajeesha-shaji
                </a>
              </li>

              {/* GitHub */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-gray-800">GitHub:</span>
                <a
                  href="https://github.com/AjeeshaShaji"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline break-all"
                >
                  github.com/AjeeshaShaji
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
