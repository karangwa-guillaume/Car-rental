import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

// JS Plugins
import $ from "jquery";
import WOW from "wowjs";
import "owl.carousel";

// Expose for legacy plugins
window.$ = $;
window.jQuery = $;
window.WOW = WOW.WOW;

// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Patch for WOW crash
        const originalGetComputedStyle = window.getComputedStyle;
        window.getComputedStyle = function (el) {
          if (!el || typeof originalGetComputedStyle !== "function") {
            return { getPropertyValue: () => "" };
          }
          const style = originalGetComputedStyle(el);
          return style && typeof style.getPropertyValue === "function"
            ? style
            : { getPropertyValue: () => "" };
        };

        // Initialize WOW
        new WOW.WOW().init();

        // Load main.js
        await import("../assets/js/main.js");

        console.log("✅ SignupPage: Scripts loaded");
      } catch (err) {
        console.error("❌ Error loading scripts on SignupPage:", err);
      }
    };

    loadScripts();
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  // Save dummy admin user to localStorage
  localStorage.setItem("adminUser", JSON.stringify({ email: form.email, password: form.password }));

  // Navigate to login page after signup
  navigate("/login");
};


  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div
              className="bg-light rounded p-4 shadow-sm wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2 className="mb-4 text-center">Admin Sign Up</h2>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </div>

                <div className="form-group mb-4">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    required
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>

              <p className="mt-3 text-center">
                Already have an account? <a href="/login">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default SignupPage;
