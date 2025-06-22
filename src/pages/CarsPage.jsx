import React, { useEffect } from "react";

// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import CarSteps from "../components/carSteps";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

const CarsPage = () => {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        const $ = (await import("jquery")).default;
        window.$ = $;
        window.jQuery = $;

        await import("../assets/lib/waypoints/waypoints.min.js");
        await import("../assets/lib/counterup/counterup.min.js");
        await import("../assets/lib/owlcarousel/owl.carousel.min.js");

        // WOW.js setup with patch for getComputedStyle crash
        const originalGetComputedStyle = window.getComputedStyle;
        window.getComputedStyle = (el) =>
          el ? originalGetComputedStyle(el) : { getPropertyValue: () => "" };

        const { WOW } = await import("wowjs");
        window.WOW = WOW;
        new WOW().init();

        await import("../assets/js/main.js");

        console.log("✅ CarsPage: scripts loaded");
      } catch (err) {
        console.error("❌ CarsPage script error:", err);
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

      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Cars
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
            <li className="breadcrumb-item active text-primary">Categories</li>
          </ol>
        </div>
      </div>

      <Categories />
      <CarSteps />
      <Banner />
      <Footer />
      <Copyright />
    </>
  );
};

export default CarsPage;
