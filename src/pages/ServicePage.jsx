import React, { useEffect } from "react";
import $ from "jquery";
import WOW from "wowjs";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel"; 

// Inject jQuery and WOW globally for legacy scripts
window.$ = $;
window.jQuery = $;
window.WOW = WOW.WOW;

// Global Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import FactCounter from "../components/FactCounter";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const ServicePage = () => {
  useEffect(() => {
  const loadScripts = async () => {
    try {
      // Make jQuery globally available
      const $ = (await import("jquery")).default;
      window.$ = $;
      window.jQuery = $;

      // Load plugins after jQuery
      await import("../assets/lib/waypoints/waypoints.min.js");
      await import("../assets/lib/counterup/counterup.min.js");
      await import("../assets/lib/owlcarousel/owl.carousel.min.js");

      // Patch getComputedStyle to avoid WOW crash
      const originalGetComputedStyle = window.getComputedStyle;
      window.getComputedStyle = function (el) {
        if (!el) return { getPropertyValue: () => "" };
        return originalGetComputedStyle(el);
      };

      // Initialize WOW.js
      const { WOW } = await import("wowjs");
      window.WOW = WOW;
      new WOW().init();

      // Load main.js
      await import("../assets/js/main.js");

      console.log("✅ Scripts loaded successfully");
    } catch (error) {
      console.error("❌ Script load failed:", error);
    }
  };

  loadScripts();
  window.scrollTo(0, 0);
}, []);

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            Our Services
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Service</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      <Services />
      <FactCounter />
      <Testimonial />
      <Banner />
      <Footer />
      <Copyright />
    </>
  );
};

export default ServicePage;
