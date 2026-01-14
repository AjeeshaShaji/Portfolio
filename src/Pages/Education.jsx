import React from "react";

function Education() {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Education & Experience
        </h1>

        <div className="space-y-10">

          {/* MERN Internship */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              MERN Stack Development Intern
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Synnefo Solutions | Apr 2025 – Present | Ernakulam, Kerala, India
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Built internal web tools and client-facing applications using
                React and Node.js.
              </li>
              <li>
                Collaborated with UI/UX designers and QA teams to deliver
                pixel-perfect, bug-free user interfaces.
              </li>
              <li>
                Integrated RESTful APIs and designed MongoDB schemas for
                scalable backend services.
              </li>
              <li>
                Refactored legacy components to improve performance,
                readability, and maintainability.
              </li>
            </ul>
          </div>

          {/* BCA Degree */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              Bachelor of Computer Applications (BCA)
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              University of Kerala | Oct 2022 – Apr 2025
            </p>

            <p className="text-sm text-gray-500 mb-4">
              College of Applied Science, Adoor, Kerala, India
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Gained strong foundations in programming concepts, data
                structures, and object-oriented design.
              </li>
              <li>
                Studied core subjects including Web Technologies, Database
                Management Systems, Operating Systems, and Software Engineering.
              </li>
              <li>
                Developed academic projects using HTML, CSS, JavaScript,
                React, Node.js, and MongoDB.
              </li>
              <li>
                Applied MVC architecture and REST principles in multiple
                mini and major projects.
              </li>
              <li>
                Enhanced problem-solving and debugging skills through
                hands-on lab sessions and coursework.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
