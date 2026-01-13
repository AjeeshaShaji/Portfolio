import React from "react";

function Projects(){
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h1>

        <div className="space-y-10">

          {/* Student Management System */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              Student Management System
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Tools Used: HTML, CSS, JavaScript, Node.js, MongoDB
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed a system to manage student-related book records.</li>
              <li>Implemented CRUD operations for adding, editing, deleting, and viewing book details.</li>
              <li>Integrated search and filter functionality for efficient data retrieval.</li>
              <li>Designed a clean, user-friendly interface to improve data organization.</li>
            </ul>

            <a
              href="https://github.com/AjeeshaShaji/mvcbook.git"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-indigo-600 font-medium hover:underline"
            >
              View GitHub Repository →
            </a>
          </div>

          {/* Expense Tracker */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              Expense Tracker
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Tools Used: HTML, CSS, JavaScript, React, Express, MongoDB
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed a mini expense management application using React.</li>
              <li>Implemented features to add, view, and delete expenses.</li>
              <li>Displayed real-time total expense calculation with automatic updates.</li>
              <li>Used localStorage to persist data across browser refreshes.</li>
              <li>Demonstrated strong understanding of React hooks and state management.</li>
            </ul>

            <a
              href="https://github.com/AjeeshaShaji/Expense.git"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-indigo-600 font-medium hover:underline"
            >
              View GitHub Repository →
            </a>
          </div>

          {/* E-Commerce Website */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              E-Commerce Website
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Tools Used: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed a role-based e-commerce platform for sellers and buyers.</li>
              <li>Implemented secure authentication, REST APIs, and MongoDB schemas.</li>
              <li>Enabled sellers to add, edit, and delete products.</li>
              <li>Allowed buyers to search and browse products.</li>
              <li>Built a responsive React frontend with an MVC-based backend.</li>
            </ul>

            <a
              href="https://github.com/AjeeshaShaji/ecommers.git"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-indigo-600 font-medium hover:underline"
            >
              View GitHub Repository →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
