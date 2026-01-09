import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* ===== NAVBAR CSS (SAME FILE) ===== */}
      <style>{`
        .navbar {
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          background:  #f8fafc;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .logo {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0c0c0c;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
        }

        .nav-links li a {
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          color: #1f2937;
          padding: 6px 10px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .nav-links li a:hover {
          background: #0c0c0c;
          color: #ffffff;
        }

        /* ===== Mobile Responsive ===== */
        @media (max-width: 768px) {
          .navbar {
            padding: 0 20px;
          }

          .nav-links {
            gap: 15px;
          }

          .nav-links li a {
            font-size: 0.95rem;
          }
        }
      `}</style>

      {/* ===== JSX ===== */}
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
