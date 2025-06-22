import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

// JS + Plugins
import $ from "jquery";
import WOW from "wowjs";
import "owl.carousel";

// Expose jQuery for plugins
window.$ = $;
window.jQuery = $;
window.WOW = WOW.WOW;


// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const loadScripts = async () => {
      try {
        const $ = (await import("jquery")).default;
        window.$ = $;
        window.jQuery = $;

        await import("../assets/lib/waypoints/waypoints.min.js");
        await import("../assets/lib/counterup/counterup.min.js");
        await import("../assets/lib/owlcarousel/owl.carousel.min.js");

        const originalGetComputedStyle = window.getComputedStyle;
        window.getComputedStyle = function (el) {
          try {
            const style = originalGetComputedStyle(el);
            return style && typeof style.getPropertyValue === "function"
              ? style
              : { getPropertyValue: () => "" };
          } catch {
            return { getPropertyValue: () => "" };
          }
        };

        const { WOW } = await import("wowjs");
        new WOW({ live: false }).init();

        await import("../assets/js/main.js");
        console.log("✅ Scripts loaded successfully");
      } catch (error) {
        console.error("❌ Script load failed:", error);
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
    const storedUser = JSON.parse(localStorage.getItem("adminUser"));
    if (storedUser && storedUser.email === form.email && storedUser.password === form.password) {
      localStorage.setItem("isAdmin", "true");
      navigate("/adminDashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="bg-light rounded p-4 shadow-sm wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="mb-4 text-center">Admin Login</h2>

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
                    autoComplete="email"
                  />
                </div>

                <div className="form-group mb-4">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    required
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>

              <p className="mt-3 text-center">
                Don’t have an account? <a href="/signup">Register here</a>
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

export default LoginPage;
