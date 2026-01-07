const PersonalDetails = () => {
  return (
    <div className="details-container">
      
      {/* Left Side - Profile Photo */}
      <div className="profile-photo">
        <p>Profile Photo</p>
      </div>

      {/* Right Side - Details */}
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
  );
};

export default PersonalDetails;
