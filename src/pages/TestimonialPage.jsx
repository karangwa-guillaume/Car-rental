import React, { useEffect } from "react";

// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

const TestimonialPage = () => {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        const $ = (await import("jquery")).default;
        window.$ = $;
        window.jQuery = $;

        await import("../assets/lib/waypoints/waypoints.min.js");
        await import("../assets/lib/counterup/counterup.min.js");
        await import("../assets/lib/owlcarousel/owl.carousel.min.js");

        // Patch getComputedStyle to avoid WOW.js crash
        const originalGetComputedStyle = window.getComputedStyle;
        window.getComputedStyle = (el) =>
          el ? originalGetComputedStyle(el) : { getPropertyValue: () => "" };

        const { WOW } = await import("wowjs");
        new WOW().init();

        await import("../assets/js/main.js");

        console.log("✅ TestimonialPage scripts loaded.");
      } catch (err) {
        console.error("❌ Failed to load TestimonialPage scripts:", err);
      }
    };

    window.scrollTo(0, 0);
    loadScripts();
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
          style={{ maxWidth: 900 }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Testimonial
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
            <li className="breadcrumb-item active text-primary">
              Testimonial
            </li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      <Testimonial />
      <Footer />
      <Copyright />
    </>
  );
};

export default TestimonialPage;

