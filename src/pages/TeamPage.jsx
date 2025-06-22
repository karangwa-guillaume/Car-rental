import React, { useEffect } from "react";

// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// CSS Imports
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Using npm-based Bootstrap
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

const TeamPage = () => {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        const $ = (await import("jquery")).default;
        window.$ = $;
        window.jQuery = $;

        // Load required jQuery plugins
        await import("../assets/lib/waypoints/waypoints.min.js");
        await import("../assets/lib/counterup/counterup.min.js");
        await import("../assets/lib/owlcarousel/owl.carousel.min.js");

        // Patch getComputedStyle to avoid WOW.js crashing on null
        const originalGetComputedStyle = window.getComputedStyle;
        window.getComputedStyle = function (el) {
          if (!el) return { getPropertyValue: () => "" };
          return originalGetComputedStyle(el);
        };

        const { WOW } = await import("wowjs");
        window.WOW = WOW;
        new WOW().init();

        await import("../assets/js/main.js");

        console.log("✅ TeamPage: all scripts loaded");
      } catch (err) {
        console.error("❌ TeamPage: script load failed", err);
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
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Team
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
            <li className="breadcrumb-item active text-primary">Team</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      <Team />
      <Footer />
      <Copyright />
    </>
  );
};

export default TeamPage;
