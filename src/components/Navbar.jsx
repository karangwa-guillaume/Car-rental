import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logocar from "../assets/img/logocar.png.jpg"; // ✅ Make sure it exists

const Navbar = () => {
  return (
    <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
            <img src={logocar} alt="Logo" className="me-2" style={{ height: "40px" }} />
            <h1 className="display-6 text-primary m-0">Walter Tours</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/blog" className="nav-item nav-link">
                Blog
              </Link>

              <div className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </span>
                <div className="dropdown-menu m-0">
                  <Link to="/features" className="dropdown-item">
                    Our Feature
                  </Link>
                  <Link to="/cars" className="dropdown-item">
                    Our Cars
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/booking" className="dropdown-item">
                    Book Now
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>

            {/* Action Buttons: Get Started + Login */}
            <div className="d-flex align-items-center gap-2">
              <Link to="/login" className="btn btn-outline-primary rounded-pill py-2 px-4">
                Login
              </Link>
              <Link to="/booking" className="btn btn-primary rounded-pill py-2 px-4">
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
