import React from "react";

function PersonalDetails() {
  return (
    <>
      {/* ===== CSS IN SAME FILE ===== */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .details-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          background: #f8fafc;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .profile-photo {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-photo img {
          width: 230px;
          height: 230px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #121213ff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .info {
          max-width: 500px;
        }

        .info h1 {
          font-size: 2.4rem;
          font-weight: 700;
          color: #0c0c0cff;
          margin-bottom: 6px;
        }

        .info h3 {
          font-size: 1.2rem;
          font-weight: 500;
          color: #0b0b0cff;
          margin-bottom: 24px;
        }

        .about-box {
          background: #ffffff;
          padding: 24px;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .about-box h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .about-box p {
          font-size: 1rem;
          line-height: 1.7;
          color: #4b5563;
        }

        @media (max-width: 768px) {
          .details-container {
            flex-direction: column;
            text-align: center;
          }

          .profile-photo img {
            width: 180px;
            height: 180px;
          }

          .info {
            max-width: 100%;
          }
        }
      `}</style>

      {/* ===== JSX ===== */}
      <div className="details-container">
        <div className="profile-photo">
          <img src="/profile.jpeg" alt="Profile" />
        </div>

        <div className="info">
          <h1>Ajeesha Shaji</h1>
          <h3>MERN Stack Developer</h3>

          <div className="about-box">
            <h4>About</h4>
            <p>
              I am a MERN Stack Developer passionate about building
              real-world web applications using MongoDB, Express,
              React, and Node.js.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
