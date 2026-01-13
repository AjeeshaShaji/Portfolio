import React from "react";

function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Programming Languages */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Programming Languages & Core Technologies
            </h2>
            <p className="text-gray-600">
              HTML5, CSS3, JavaScript (ES6+)
            </p>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Frameworks & Libraries
            </h2>
            <p className="text-gray-600 leading-relaxed">
              React.js, Node.js, Express.js, React Router, Redux / Context API,
              Multer, Socket.io, JWT (JSON Web Token), Nodemailer
            </p>
          </div>

          {/* Databases */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Databases
            </h2>
            <p className="text-gray-600">
              MongoDB
            </p>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Tools & Platforms
            </h2>
            <p className="text-gray-600">
              Git, GitHub, VS Code
            </p>
          </div>

          {/* Concepts & Architecture */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Concepts & Architecture
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Middleware & API Structure, RESTful APIs, JSON, Axios, Fetch API,
              MVC Architecture
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
