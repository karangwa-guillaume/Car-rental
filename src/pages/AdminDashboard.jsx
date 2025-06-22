import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Bootstrap & Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

// Plugins
import $ from "jquery";
import WOW from "wowjs";
import "owl.carousel";

// Expose jQuery for legacy scripts
window.$ = $;
window.jQuery = $;
window.WOW = WOW.WOW;

// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auth check
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) navigate("/login");

    // Patch for WOW.js crash on older browsers
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

    new WOW.WOW().init();
    window.scrollTo(0, 0);

    // Load main.js for plugins
    import("../assets/js/main.js").catch((err) =>
      console.error("❌ Failed to load main.js:", err)
    );
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminUser");
    navigate("/login");
  };

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />

      <div className="container-fluid bg-light min-vh-100 py-5">
        <div className="container">
          <h1 className="mb-5 text-center wow fadeInDown" data-wow-delay="0.1s">
            Admin Dashboard
          </h1>

          {/* Dashboard Stats */}
          <div className="row g-4 mb-5">
            {[
              { label: "Total Users", value: "128", color: "primary" },
              { label: "Bookings", value: "89", color: "success" },
              { label: "Cars", value: "12", color: "warning" },
              { label: "Messages", value: "6", color: "danger" },
            ].map((item, i) => (
              <div className="col-md-3" key={item.label}>
                <div
                  className={`bg-white rounded shadow-sm p-3 text-center wow fadeInUp`}
                  data-wow-delay={`0.${i + 1}s`}
                >
                  <h4>{item.label}</h4>
                  <p className={`display-6 text-${item.color}`}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Management Sections */}
          <div className="row g-4">
            {[
              {
                title: "Manage Users",
                desc: "View, edit, or remove users registered on the platform.",
                btn: "Go to Users",
                color: "primary",
              },
              {
                title: "Manage Bookings",
                desc: "Review, approve or cancel car rental bookings.",
                btn: "Go to Bookings",
                color: "success",
              },
              {
                title: "Manage Cars",
                desc: "Add new cars, update existing details or remove cars.",
                btn: "Go to Cars",
                color: "warning",
              },
              {
                title: "Contact Messages",
                desc: "Check messages from the contact form.",
                btn: "View Messages",
                color: "danger",
              },
            ].map((section, i) => (
              <div className="col-md-6" key={section.title}>
                <div
                  className="bg-white p-4 rounded shadow-sm h-100 wow fadeInUp"
                  data-wow-delay={`0.${i + 5}s`}
                >
                  <h4 className="mb-3">{section.title}</h4>
                  <p>{section.desc}</p>
                  <button className={`btn btn-${section.color} w-100`}>
                    {section.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Logout */}
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay="1s">
            <button className="btn btn-outline-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default AdminDashboard;
